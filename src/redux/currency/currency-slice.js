import { createSlice } from "@reduxjs/toolkit";
import {operationsCurrency} from './currency-operation'

const initialState = {
  currency:{},
  isLoading: false,
  isError: null,
}


const currencySlice = createSlice({
	name: 'currency',
	initialState,
	extraReducers: {

		[operationsCurrency.getAccessibleCurrency.pending]: (state) => {
      state.isLoading = true
      state.isError = null
		},
		[operationsCurrency.getAccessibleCurrency.fulfilled]: (state, { payload }) => {
      state.currency = payload
			state.isLoading = false
		},
		[operationsCurrency.getAccessibleCurrency.rejected]: (state, { payload }) => {
      state.currency = initialState.currency
      state.isError = payload
      state.isLoading = false
		},
	},
})

export default currencySlice.reducer