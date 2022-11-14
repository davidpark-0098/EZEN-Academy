import { configureStore } from "@reduxjs/toolkit";

import DepartmentSlice from "./slices/DepartmentSlice";

const store = configureStore({
  // 직접 작성한 Slice 오브젝트 명시
  reducer: {
    DepartmentSlice: DepartmentSlice
  }
});

export default store;
