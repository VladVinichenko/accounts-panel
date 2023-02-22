import { createSlice } from "@reduxjs/toolkit";
import { operationsAccount } from "./account-operation";

const initialState = {
  accounts:[],
  isLoading: false,
  isError: null,
}


const accountSlice = createSlice({
	name: 'account',
	initialState,
	extraReducers: {

		[operationsAccount.getAll.pending]: (state) => {
      state.isLoading = true
      state.isError = null
		},
		[operationsAccount.getAll.fulfilled]: (state, { payload }) => {
      state.accounts = payload
			state.isLoading = false
		},
		[operationsAccount.getAll.rejected]: (state, { payload }) => {
      state.accounts = initialState.accounts
      state.isError = payload
      state.isLoading = false
		},
	},
})

export default accountSlice.reducer