import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";

import PrintStar from "./pages/PrintStar";
import Calc from "./pages/Calc";

import "./assets/css/style.min.css";

function App() {
    return (
        <div>
            <h1>Print Star And Calc</h1>
            <NavLink to="print-star">PrintStar</NavLink>
            <NavLink to="calc">Calc</NavLink>
            <hr />

            <Routes>
                <Route path="print-star" element={<PrintStar />} />
                <Route path="calc" element={<Calc />} />
            </Routes>
        </div>
    );
}

export default App;
