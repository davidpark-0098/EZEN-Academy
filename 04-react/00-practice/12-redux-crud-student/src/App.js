import React, { memo } from "react";
import { Routes, Route } from "react-router-dom";

// menu style link
import MenuLink from "./components/MenuLink";

// 페이지 라우팅
import StudentList from "./pages/StudentList";
import StudentAdd from "./pages/StudentAdd";
import StudentView from "./pages/StudentView";
import StudentEdit from "./pages/StudentEdit";

const App = memo(() => {
  return (
    <div>
      <h1>Redux-CRUD-Student</h1>
      <Routes>
        <Route path="/" exapt={true} element={<StudentList />} />
        <Route path="/student_add" element={<StudentAdd />} />
        <Route path="/student_view/:id" element={<StudentView />} />
        <Route path="/student_edit/:id" element={<StudentEdit />} />
      </Routes>
    </div>
  );
});

export default App;
