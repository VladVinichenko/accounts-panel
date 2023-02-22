import { useDispatch } from "react-redux"
import {operationsCurrency} from '../../redux/currency/currency-operation'
import { operationsCompany } from "../../redux/company/company-operation"
import { operationsAccount } from "../../redux/account/account-operation"

export const Main = () => {
const dispatch = useDispatch()

dispatch(operationsCurrency.getAccessibleCurrency())
dispatch(operationsCompany.getAll())
dispatch(operationsAccount.getAll())

  return (
    <div>mameamemeaefefe</div>
  )
}