import React, { useState } from 'react';
import { createPortal } from 'react-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { selectorsAccount } from '../../redux/account/account-selectors';
import { closeModal } from '../../redux/account/account-slice';

const modalRoot = document.querySelector('#root-modal')

export const ModalComponent = ({children, onClick}) => {
  const dispatch = useDispatch()
const onCloseModal = () => dispatch(closeModal())
  const isModalOpen = useSelector(selectorsAccount.isModalAddAccountOpen)

  return createPortal(
    <>
      <Modal show={isModalOpen} onHide={onCloseModal}  centered>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
{children}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onCloseModal}>
            Close
          </Button>
          <Button variant="primary" type='submit' onClick={onClick}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>,
    modalRoot
  );
}