import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getAll = createAsyncThunk( 'account/getAll', async (id, thunkApi) => {
  const filterId = thunkApi.getState().account.filter.company.id
let url = '/account'
if(filterId) url = url + `?filter=${filterId}`


  try {
    const res = await axios.get(url)
    return res.data
  } catch (error) {
    console.error(error.mesage)
  }
})

const createAccount = createAsyncThunk( 'account/create', async (id, thunkApi) => {
  const data = thunkApi.getState().account.account
  try {
    const res = await axios.post('/account', data)
    return res.data
  } catch (error) {
    console.error(error.mesage)
  }
})

const createPayment = createAsyncThunk( 'account/createPatment', async (id, thunkApi) => {
  const data = {sendPayment: 'send'}
  try {
    const res = await axios.put(`/account/${id}`, data)
    console.log(res.data);
    return res.data
  } catch (error) {
    console.error(error.mesage)
  }
})


export const operationsAccount = {
  getAll,
  createAccount,
  createPayment,
}