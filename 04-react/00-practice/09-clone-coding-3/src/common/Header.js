import React from "react";
import { HashLink } from "react-router-hash-link";
import styled from "styled-components";

import mq from "../MediaQuery";

const HeaderContainer = styled.header`
    #icon {
        font-size: 24px;
        padding: 16px;
    }
    width: 1200px;
    margin: 0 auto;
    height: 68px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
`;

const Header = () => {
    return (
        <HeaderContainer>
            <div id="icon">
                <div>☰</div>
            </div>
            <div>
                <h1>My Food</h1>
            </div>
            <div>
                <h1>Mail</h1>
            </div>
        </HeaderContainer>
    );
};

export default Header;
