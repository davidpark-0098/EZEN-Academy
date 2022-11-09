import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./slices/CounterSlice";

const store = configureStore({
  // 직접 작성한 Slice 오브젝트 명시
  reducer: {
    CounterSlice: CounterSlice
  }
});

export default store;
