import React, { memo } from "react";
import { Routes, Route } from "react-router-dom";

// menu style link
import MenuLink from "./components/MenuLink";

// 페이지 라우팅
import TrafficAccList from "./pages/TrafficAccList";
import TrafficAccAdd from "./pages/TrafficAccAdd";
import TrafficAccView from "./pages/TrafficAccView";
import TrafficAccEdit from "./pages/TrafficAccEdit";

const App = memo(() => {
  return (
    <div>
      <h1>Redux-CRUD-Traffic_Acc</h1>
      <Routes>
        <Route path="/" exapt={true} element={<TrafficAccList />} />
        <Route path="/traffic_acc_add" element={<TrafficAccAdd />} />
        <Route path="/traffic_acc_view/:id" element={<TrafficAccView />} />
        <Route path="/traffic_acc_edit/:id" element={<TrafficAccEdit />} />
      </Routes>
    </div>
  );
});

export default App;
