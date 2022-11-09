import React, { memo } from "react";
import { Routes, Route } from "react-router-dom";

// menu style link
import MenuLink from "./components/MenuLink";

// 페이지 라우팅
import Counter from "./pages/Counter";

const App = memo(() => {
  return (
    <div>
      <h1>13-redux</h1>
      <nav>
        <MenuLink to="/counter">Counter</MenuLink>
      </nav>
      <hr />
      <Routes>
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </div>
  );
});

export default App;
