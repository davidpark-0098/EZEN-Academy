import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { cloneDeep } from "lodash";

// reducer helper
import { pending, fulfilled, rejected } from "../helper/ReduxHelper";

// 다중행 데이터 조회를 위한 비동기 함수
export const getList = createAsyncThunk("Covid19Slice/getList", async (payload, { rejectWithValue }) => {
  let result = null;
  const URL = process.env.REACT_APP_API_COVID19_LIST;

  let params = null;
  console.log(payload.id);

  if (payload?.gte && payload?.lte) {
    params = {
      date: [payload.gte, payload.lte]
    };
  }

  if (payload?.id) {
    params = {
      id: payload.id
    };
  }

  try {
    const response = await axios.get(URL, {
      params: params
    });
    result = response.data;
    console.log(`getList =`, result);
  } catch (err) {
    result = rejectWithValue(err.response);
  }
  return result;
});

// id를 통해 기간 찾기
export const getIdList = createAsyncThunk("Covid19Slice/getIdList", async (payload, { rejectWithValue }) => {
  let result = null;
  const URL = process.env.REACT_APP_API_COVID19_LIST;

  let params = null;

  if (payload?.id) {
    params = {
      id: payload.id
    };
  }

  try {
    const response = await axios.get(URL, {
      params: params
    });
    result = response.data;
    console.log(`getIdList =`, result);
  } catch (err) {
    result = rejectWithValue(err.response);
  }
  return result;
});

const Covid19Slice = createSlice({
  name: "Covid19Slice",
  initialState: {
    data: null,
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: {
    // 다중행 데이터 조회 액션 함수
    [getList.pending]: pending,
    [getList.fulfilled]: fulfilled,
    [getList.rejected]: rejected,
  }
});

export const { getCurrentData } = Covid19Slice.actions;
export default Covid19Slice.reducer;
