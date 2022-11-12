import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getKakaoSearch = createAsyncThunk("ImageSearchSlice/getKakaoSearch", async (payload, { rejectWithValue }) => {
  let result = null;

  try {
    const response = await axios.get(process.env.REACT_APP_KAKAO_SEARCH_API_URL, {
      params: {
        query: payload.query,
        page: payload.page ? payload.page : 1,
        size: 30
      },
      headers: { Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_API_KEY}` }
    });
    result = response.data;
  } catch (err) {
    result = rejectWithValue(err.response);
  }
  return result;
});

const ImageSearchSlice = createSlice({
  name: "ImageSearchSlice",
  initialState: {
    data: null,
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: {
    [getKakaoSearch.pending]: (state, { payload }) => {
      return { ...state, loading: true };
    },
    [getKakaoSearch.fulfilled]: (state, { meta, payload }) => {
      if (meta.arg.page > 1) {
        payload.documents = state.data.documents.concat(payload.documents);
        console.log(`누적 데이터의 길이는 ${payload.documents.length}개 입니다.`);
      }

      return {
        data: payload,
        loading: false,
        error: null
      };
    },
    [getKakaoSearch.rejected]: (state, { payload }) => {
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

export default ImageSearchSlice.reducer;
