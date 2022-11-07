import React from "react";
import { Link, Routes, Route } from "react-router-dom";

import Header from "./common/Header";
import Footer from "./common/Footer";
import Main from "./pages/Main";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <hr />
      <Footer />
    </div>
  );
}

export default App;
