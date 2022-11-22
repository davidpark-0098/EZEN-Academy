import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// 다중행 데이터 조회를 위한 비동기 함수
export const getList = createAsyncThunk("Covid19Slice/getList", async (payload, { rejectWithValue }) => {
  let result = null;
  const URL = process.env.REACT_APP_API_COVID19_LIST;
  let params = null;

  /** gte와 lte 값이 존재할 때, 기간 사이 날짜를 배열로 리턴하여 params에 대입  */
  if (payload?.gte && payload?.lte) {
    let dateArray = [];
    let curDate = new Date(payload.gte);
    while (curDate <= new Date(payload.lte)) {
      dateArray.push(curDate.toISOString().split("T")[0] + "T00:00:00Z");
      curDate.setDate(curDate.getDate() + 1);
    }
    params = {
      date: dateArray
    };
  }

  try {
    const response = await axios.get(URL, {
      params: params
    });
    result = response.data;
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
    [getList.pending]: (state, { payload }) => {
      return { ...state, loading: true };
    },
    [getList.fulfilled]: (state, { meta, payload }) => {
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
          code: payload.status ? payload.status : 500,
          message: payload.statusText ? payload.statusText : "Server Error"
        }
      };
    }
  }
});

export const { getCurrentData } = Covid19Slice.actions;
export default Covid19Slice.reducer;
