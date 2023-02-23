import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../components/Container";
import { Section } from "../../components/section";
import { operationsAccount } from "../../redux/account/account-operation";
import { Header } from "../../components/header";
import { TableAccounts } from "../../components/table";
import { selectorsAccount } from "../../redux/account/account-selectors";
import { ModalComponent } from "../../components/modalComponent";
import { FormAddAccount } from "../../components/formAddAccount";
import styled from "styled-components";

export const Main = () => {
  const dispatch = useDispatch();

  const isOpenModal = useSelector(selectorsAccount.isModalAddAccountOpen);
  const onClickSend = () => dispatch(operationsAccount.createAccount());
  return (
    <>
      <Header />
      <Section>
        <Container>
          <TableWrapper>
            <TableAccounts />
          </TableWrapper>
        </Container>
      </Section>
      {isOpenModal && (
        <ModalComponent onClick={onClickSend}>
          <FormAddAccount />
        </ModalComponent>
      )}
    </>
  );
};

const TableWrapper = styled.div`
  max-width: 100vw;
  width: 100%;
  overflow: auto;
`;
