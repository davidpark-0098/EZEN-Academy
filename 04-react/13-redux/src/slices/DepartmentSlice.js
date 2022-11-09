import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "/department";

export const getList = createAsyncThunk("DepartmentSlice/getList", async (payload, { rejectWithValue }) => {
  let result = null;

  try {
    const response = await axios.get(API_URL);
    result = response.data;
  } catch (err) {
    result = rejectWithValue(err.response);
  }

  return result;
});

const DepartmentSlice = createSlice({
  name: "DepartmentSlice",
  initialState: {
    data: null,
    loading: false,
    error: null
  },

  extraReducers: {
    [getList.pending]: (state, { payload }) => {
      return { ...state, loading: true };
    },
    [getList.fulfilled]: (state, { payload }) => {
      return {
        data: payload,
        loading: false,
        error: null
      };
    },
    [getList.rejected]: (state, { payload }) => {
      return {
        ...state,
        loading: false,
        error: {
          code: payload?.status ? payload.status : 500,
          message: payload?.statusText ? payload.statusText : "Server Error"
        }
      };
    }
  }
});

export default DepartmentSlice.reducer;
