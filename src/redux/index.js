import axios from 'axios'
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import currencySlice from './currency/currency-slice';
import companySlice from './company/company-slice';
import accountSlice from './account/account-slice';

axios.defaults.baseURL = process.env.REACT_APP_API_URL
// axios.defaults.baseURL = 'http://localhost:8080'

const rootReducer = combineReducers({
	currency: currencySlice,
	company: companySlice,
	account: accountSlice,
})

export const store = configureStore({
	reducer: rootReducer,
	devTools: process.env.NODE_ENV === 'development',
})


