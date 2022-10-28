import React from 'react';
import {Link, Routes, Route} from "react-router-dom";

import DepartmentTable from "./pages/DepartmentTable"
import ProfessorTable from "./pages/ProfessorTable"
import StudentTable from "./pages/StudentTable"

function App() {
  return (
    <div>
      <h1>학교</h1>
      <hr />

      <Link to='/department_table'>학과목록</Link>&nbsp;|&nbsp;
      <Link to='/professor_table'>교수목록</Link>&nbsp;|&nbsp;
      <Link to='/student_table'>학생목록</Link>

      <Routes>
        <Route path='/department_table' element={<DepartmentTable/>} />
        <Route path='/professor_table' element={<ProfessorTable/>} />
        <Route path='/student_table' element={<StudentTable/>} />
      </Routes>
    </div>
  );
}

export default App;