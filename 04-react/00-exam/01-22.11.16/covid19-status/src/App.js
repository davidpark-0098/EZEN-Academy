import React, { memo } from "react";
import { Routes, Route } from "react-router-dom";

/** 컴포넌트 */
import Top from "./components/Top";

/** 페이지 라우팅 */
import Covid19 from "./pages/Covid19";

const App = memo(() => {
  return (
    <div>
      <Top />

      <Routes>
        <Route path="/covid19/*" element={<Covid19 />} />
      </Routes>
    </div>
  );
});

export default App;
