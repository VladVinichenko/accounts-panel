import { createSlice } from "@reduxjs/toolkit";
import { operationsAccount } from "./account-operation";

const initialState = {
  accounts: [],
  account: { company: null, name: null, accountAmount: null, currency: null },
  filter: {company: {name: null, id: null}},
  isModalAddAccountOpen: false,
  isLoading: false,
  isError: null,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isModalAddAccountOpen = true;
    },
    closeModal: (state, action) => {
      state.isModalAddAccountOpen = false;
    },
    onChangeAccount: (state, {payload}) => {
      state.account[payload.name] = payload.value;
    },
    onChangefilter: (state, {payload}) => {
      state.filter[payload.filter]={name: payload.name, id: payload.value};
    },
    removefilter: (state, {payload}) => {
      state.filter = initialState.filter;
    },
  },
  extraReducers: {
    [operationsAccount.getAll.pending]: (state) => {
      state.isLoading = true;
      state.isError = null;
    },
    [operationsAccount.getAll.fulfilled]: (state, { payload }) => {
      state.accounts = payload;
      state.isLoading = false;
    },
    [operationsAccount.getAll.rejected]: (state, { payload }) => {
      state.accounts = initialState.accounts;
      state.isError = payload;
      state.isLoading = false;
    },

		[operationsAccount.createAccount.pending]: (state) => {
      state.isLoading = true;
      state.isError = null;
    },
    [operationsAccount.createAccount.fulfilled]: (state, { payload }) => {
      state.accounts.push(payload) ;
			state.account = initialState.account;
			state.isModalAddAccountOpen = false
      state.isLoading = false;
    },
    [operationsAccount.createAccount.rejected]: (state, { payload }) => {
      state.isError = payload;
      state.isLoading = false;
    },

    [operationsAccount.createPayment.pending]: (state) => {
      state.isLoading = true;
      state.isError = null;
    },
    [operationsAccount.createPayment.fulfilled]: (state, { payload }) => {
      const indexOf = state.accounts.map(e => e._id).indexOf(payload._id)
      state.accounts.splice(indexOf, 1, payload);
			state.isModalAddAccountOpen = false
      state.isLoading = false;
    },
    [operationsAccount.createPayment.rejected]: (state, { payload }) => {
      state.isError = payload;
      state.isLoading = false;
    },
  },
});

export default accountSlice.reducer;

export const { openModal, closeModal, onChangeAccount, onChangefilter, removefilter } = accountSlice.actions;
