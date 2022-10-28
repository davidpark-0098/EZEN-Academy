import React from 'react';

import Jumbotron from "./Jumbotron";
import About from "./About";
import Menu from "./Menu";
import Contact from "./Contact";

function index() {
    return (
        <div>
            <Jumbotron/>
            <About/>
            <hr />
            <Menu/>
            <hr />
            <Contact/>
        </div>
    )
}

export default index