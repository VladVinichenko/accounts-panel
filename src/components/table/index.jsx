import { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { operationsAccount } from "../../redux/account/account-operation";
import { selectorsAccount } from "../../redux/account/account-selectors";
import Spinner from "react-bootstrap/Spinner";
import { Button } from "react-bootstrap";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

export const TableAccounts = () => {
  const dispatch = useDispatch();

  const dataTable = useSelector(selectorsAccount.getAll);
  const isLoadingTable = useSelector(selectorsAccount.isLoading);
  const onClickPay = (el) => {
    dispatch(operationsAccount.createPayment(el.target.value));
  };

  useEffect(() => {
    dispatch(operationsAccount.getAll());
  }, []);

  return (
    <>
      {!isLoadingTable && (
        <Table width='100%' striped bordered hover variant="dark">
          <thead>
            <tr>
              <td>Номер патежу</td>
              <td>Компанія</td>
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
                  <td>{el.company}</td>
                  <td>{el.name}</td>
                  <td>{el.accountAmount}</td>
                  <td>{el.currency}</td>
                  <td>
                    {el.paymentTime ? (
                      el.paymentTime
                    ) : (
                      <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Оплатити вказану суму</Tooltip>}>
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
                  <td>{el.createdAt}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      )}
      {isLoadingTable && <Spinner animation="grow" variant="primary" />}
    </>
  );
};
