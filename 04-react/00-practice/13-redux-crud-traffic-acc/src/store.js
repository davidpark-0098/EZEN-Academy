import { configureStore } from "@reduxjs/toolkit";

import TrafficAccSlice from "./slices/TrafficAccSlice";

const store = configureStore({
  // 직접 작성한 Slice 오브젝트 명시
  reducer: {
    TrafficAccSlice: TrafficAccSlice
  }
});

export default store;
