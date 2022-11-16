import { configureStore } from "@reduxjs/toolkit";

import StudentSlice from "./slices/StudentSlice";

const store = configureStore({
  // 직접 작성한 Slice 오브젝트 명시
  reducer: {
    StudentSlice: StudentSlice
  }
});

export default store;
