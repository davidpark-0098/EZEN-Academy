import { configureStore } from "@reduxjs/toolkit";

import CounterSlice from "./slices/CounterSlice";
import DepartmentSlice from "./slices/DepartmentSlice";
import NewsSlice from "./slices/NewsSlice";
import MovieRankSlice from "./slices/MovieRankSlice";

const store = configureStore({
  // 직접 작성한 Slice 오브젝트 명시
  reducer: {
    CounterSlice: CounterSlice,
    DepartmentSlice: DepartmentSlice,
    NewsSlice: NewsSlice,
    MovieRankSlice: MovieRankSlice
  }
});

export default store;
