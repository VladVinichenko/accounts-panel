import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getAll = createAsyncThunk( 'company/getAll', async (id, thunkApi) => {
  try {
    const res = await axios.get('/company')
    return res.data
  } catch (error) {
    console.error(error.mesage)
  }
})


export const operationsCompany = {
  getAll
}