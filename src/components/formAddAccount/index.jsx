import { useEffect } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { onChangeAccount } from "../../redux/account/account-slice";
import { operationsCompany } from "../../redux/company/company-operation";
import { selectorsCompany } from "../../redux/company/company-selectors";
import { operationsCurrency } from "../../redux/currency/currency-operation";
import { selectorsCurrency } from "../../redux/currency/currency-selectors";


export const FormAddAccount = () => {
  const dispatch = useDispatch()

const allCompanies = useSelector(selectorsCompany.getAccessibleCompany)
const allCurrency = useSelector(selectorsCurrency.getAccessibleCurrency)
const onChange = el => {dispatch(onChangeAccount({name: el.target.name,value: el.target.value}))}

  useEffect(()=> {
    dispatch(operationsCompany.getAll()) // eslint-disable-next-line
    dispatch(operationsCurrency.getAccessibleCurrency()) // eslint-disable-next-line
  }, []) // eslint-disable-next-line


  return (
    <Form onChange={onChange}>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Select name="company" aria-label="Default select example">
      <option>Оберіть компанію</option>
      {allCompanies && allCompanies.map((el) => (
        <option key={el._id} value={el._id}>{el.name}</option>
      ))}

    </Form.Select>
    </Form.Group>

    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Введіть назву гри</Form.Label>
      <Form.Control
        type="text"
        name="name"
      />
    </Form.Group>

    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Внесок</Form.Label>
      <Form.Control
        type="number"
        name="accountAmount"
      />
    </Form.Group>

    <Form.Group>
    <Form.Select name="currency" aria-label="Default select example">
    <option>Оберіть валюту оплати</option>
    {allCurrency && Object.keys(allCurrency).map(el => (
      <option key={allCurrency[el].code} value={allCurrency[el].code}>{allCurrency[el].code}</option>
    ))}

  </Form.Select>
    </Form.Group>
  </Form>
  )
}