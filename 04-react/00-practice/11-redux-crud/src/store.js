import { configureStore } from "@reduxjs/toolkit";

import ProfessorSlice from "./slices/ProfessorSlice";
import StudentSlice from "./slices/StudentSlice";
import GradeSlice from "./slices/GradeSlice";

const store = configureStore({
  // 직접 작성한 Slice 오브젝트 명시
  reducer: {
    ProfessorSlice: ProfessorSlice,
    StudentSlice: StudentSlice,
    GradeSlice: GradeSlice
  }
});

export default store;
