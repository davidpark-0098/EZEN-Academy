import React, { memo } from "react";
import { Routes, Route } from "react-router-dom";

// menu style link
import MenuLink from "./components/MenuLink";

// 페이지 라우팅
import Counter from "./pages/Counter";
import Department from "./pages/Department";
import News from "./pages/News";
import MovieRank from "./pages/MovieRank";

const App = memo(() => {
  return (
    <div>
      <h1>13-redux</h1>
      <nav>
        <MenuLink to="/">Counter</MenuLink>
        <MenuLink to="/department">Department</MenuLink>
        <MenuLink to="/news">News</MenuLink>
        <MenuLink to="/movie_rank">MovieRank</MenuLink>
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/department" element={<Department />} />
        <Route path="/news" element={<News />} />
        <Route path="/movie_rank" element={<MovieRank />} />
      </Routes>
    </div>
  );
});

export default App;
