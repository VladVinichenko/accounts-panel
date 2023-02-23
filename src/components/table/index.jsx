import { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { operationsAccount } from "../../redux/account/account-operation";
import { selectorsAccount } from "../../redux/account/account-selectors";
import Spinner from "react-bootstrap/Spinner";
import { Button } from "react-bootstrap";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { operationsCompany } from "../../redux/company/company-operation";
import { selectorsCompany } from "../../redux/company/company-selectors";
import { onChangefilter, removefilter } from "../../redux/account/account-slice";

export const TableAccounts = () => {
  const dispatch = useDispatch();
  const allCompanies = useSelector(selectorsCompany.getAccessibleCompany);
  const dataTable = useSelector(selectorsAccount.getAll);
  const isLoadingTable = useSelector(selectorsAccount.isLoading);
  const selectedFilter = useSelector(selectorsAccount.selectFilter)
  const onClickPay = (el) => {
    dispatch(operationsAccount.createPayment(el.target.value));
  };

  const onClickFilter = (el) => {
    dispatch(onChangefilter({name: el.target.name,value: el.target.id, filter: 'company'}))
  };

  const onDeleteFilterAction = (el) => {
    dispatch(removefilter())
  };

  const companyName = (id) => {
     const index = allCompanies.map(e => e._id).indexOf(id)
     return allCompanies[index]?.name
  }

  const dateFormat = (date) => {
    const d = new Date(date)
    const zeroLength = 2
    // .padStart(zeroLength, '0')
    return `${d.getHours().toString().padStart(zeroLength, '0')}:${d.getMinutes().toString().padStart(zeroLength, '0')} ${d.getDay().toString().padStart(zeroLength, '0')}.${(d.getMonth() + 1).toString().padStart(zeroLength, '0')}.${d.getFullYear()}`
  }

  useEffect(() => {
    dispatch(operationsAccount.getAll()); // eslint-disable-next-line
  }, [selectedFilter]);

  useEffect(() => {
    dispatch(operationsCompany.getAll()); // eslint-disable-next-line
  }, []);

  return (
    <>
      {!isLoadingTable && (
        <Table width="100%" striped bordered hover variant="dark">
          <thead>
            <tr>
              <td>Номер патежу</td>
              <td>
              <DropdownButton
            as={ButtonGroup}
            size="sm"
            variant="secondary"
            title={selectedFilter.company.name ||'Компанія'}
          >
            <Dropdown.Item onClick={onDeleteFilterAction}>Очистити фільтр</Dropdown.Item>
            <Dropdown.Divider />
            {allCompanies && allCompanies.map(el => (
              <Dropdown.Item key={el._id} id={el._id} name={el.name} onClick={onClickFilter}>{el.name}</Dropdown.Item>
            ))}
          </DropdownButton>
              </td>
              <td>Назва гри</td>
              <td>Сума</td>
              <td>Валюта</td>
              <td>Оплата</td>
              <td>Чвс створення</td>
            </tr>
          </thead>
          <tbody>
            {!isLoadingTable &&
              dataTable?.map((el) => (
                <tr key={el._id}>
                  <td>{el.accountNumber}</td>
                  <td>{companyName(el.company)}</td>
                  <td>{el.name}</td>
                  <td>{el.accountAmount}</td>
                  <td>{el.currency}</td>
                  <td>
                    {el.paymentTime ? (
                      dateFormat(el.paymentTime)
                    ) : (
                      <OverlayTrigger
                        overlay={
                          <Tooltip id="tooltip-disabled">
                            Оплатити вказану суму
                          </Tooltip>
                        }
                      >
                        <span className="d-inline-block">
                          <Button
                            onClick={onClickPay}
                            value={el._id}
                            variant="secondary"
                            size="sm"
                          >
                            Оплатити
                          </Button>
                        </span>
                      </OverlayTrigger>
                    )}
                  </td>
                  <td>{dateFormat(el.createdAt)}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      )}
      {isLoadingTable && <Spinner animation="grow" variant="primary" />}
    </>
  );
};
