import React, { memo } from "react";
import { Routes, Route } from "react-router-dom";

import GradeList from "./pages/GradeList";
import GradeAdd from "./pages/GradeAdd";
import GradeEdit from "./pages/GradeEdit";

function App() {
  return (
    <div>
      <h1>11-Axios-Hooks-CRUD</h1>

      <Routes>
        <Route path="/" exapt={true} element={<GradeList />} />
        <Route path="/add" exapt={true} element={<GradeAdd />} />
        <Route path="/edit/" exapt={true} element={<GradeEdit />} />
      </Routes>
    </div>
  );
}

export default App;
