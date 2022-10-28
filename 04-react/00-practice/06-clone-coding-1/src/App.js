import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./common/Navbar";
import Footer from "./common/Footer";

import Main from "./pages/Main";

function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" exact={true} element={<Main />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;