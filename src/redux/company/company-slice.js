import { createSlice } from "@reduxjs/toolkit";
import {operationsCompany} from './company-operation'

const initialState = {
  company:[],
  isLoading: false,
  isError: null,
}


const companySlice = createSlice({
	name: 'company',
	initialState,
	extraReducers: {

		[operationsCompany.getAll.pending]: (state) => {
      state.isLoading = true
      state.isError = null
		},
		[operationsCompany.getAll.fulfilled]: (state, { payload }) => {
      state.company = payload
			state.isLoading = false
		},
		[operationsCompany.getAll.rejected]: (state, { payload }) => {
      state.company = initialState.company
      state.isError = payload
      state.isLoading = false
		},
	},
})

export default companySlice.reducer