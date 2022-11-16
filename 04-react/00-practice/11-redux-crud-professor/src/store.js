import { configureStore } from "@reduxjs/toolkit";

import ProfessorSlice from "./slices/ProfessorSlice";

const store = configureStore({
  // 직접 작성한 Slice 오브젝트 명시
  reducer: {
    ProfessorSlice: ProfessorSlice
  }
});

export default store;
