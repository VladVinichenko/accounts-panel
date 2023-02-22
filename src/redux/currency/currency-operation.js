import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getAccessibleCurrency = createAsyncThunk( 'currency/getAccessible', async (id, thunkApi) => {
  try {
    const res = await axios.get('/currency')
    return res.data
  } catch (error) {
    console.error(error.mesage)
  }
})


export const operationsCurrency = {
  getAccessibleCurrency
}