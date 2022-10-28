import React, { memo } from "react";
import { Routes, Route } from "react-router-dom";

import MenuLink from "./components/MenuLink";
import Image from "./pages/Image";
import Style from "./pages/Style";
import Tab from "./pages/Tab";
import Submenu from "./pages/Submenu";
import Collapse from "./pages/Collapse";
import CreateElement from "./pages/CreateElement";

const App = memo(() => {
    return (
        <div>
            <h1>UI</h1>

            <nav>
                <MenuLink to="/image">Image</MenuLink>
                <MenuLink to="/style">Style</MenuLink>
                <MenuLink to="/tab">Tab</MenuLink>
                <MenuLink to="/submenu">Submenu</MenuLink>
                <MenuLink to="/collapse">Collapse</MenuLink>
                <MenuLink to="/create_element">CreateElement</MenuLink>
            </nav>
            <hr />
            <Routes>
                <Route path="/image" element={<Image />} />
                <Route path="/style" element={<Style />} />
                <Route path="/tab" element={<Tab />} />
                <Route path="/submenu" element={<Submenu />} />
                <Route path="/collapse" element={<Collapse />} />
                <Route path="/create_element" element={<CreateElement />} />
            </Routes>
        </div>
    );
});

export default App;
