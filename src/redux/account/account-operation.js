import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getAll = createAsyncThunk( 'account/getAll', async (id, thunkApi) => {
  try {
    const res = await axios.get('/account')
    return res.data
  } catch (error) {
    console.error(error.mesage)
  }
})


export const operationsAccount = {
  getAll,
}