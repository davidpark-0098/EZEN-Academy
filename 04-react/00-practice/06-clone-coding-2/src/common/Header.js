import React from "react";
import { HashLink } from "react-router-hash-link";
import styled from "styled-components";

import mq from "../MediaQuery";

const HeaderContainer = styled.header`
    width: 100%;
    height: 55px;
    background-color: #f5f5f5;
    box-shadow: 0 5px 80px 0 gray;
    display: flex;
    justify-content: space-between;
    padding: 8px 16px;
    box-sizing: border-box;
    position: fixed;
    z-index: 5000;

    .headerLogo {
        width: 180px;
        height: 39px;

        a {
            display: block;
            text-align: center;
            line-height: 39px;
            letter-spacing: 4px;
            color: black;
            transition-duration: 350ms;
            white-space: nowrap;

            &:hover {
                background-color: #dbdbdb;
            }

            b {
                font-weight: bold;
            }
        }
    }

    .headerNav {
        display: flex;
        width: 330px;
        height: 39px;
        text-align: center;

        a {
            width: 110px;
            height: 39px;
            font-size: 15px;
            line-height: 39px;
            letter-spacing: 4px;
            color: black;
            transition-duration: 350ms;

            &:hover {
                background-color: #dbdbdb;
            }

            ${mq.maxWidth("sm")`
            display: none;
            `}
        }
    }
`;

const Header = () => {
    return (
        <HeaderContainer>
            <div className="headerLogo">
                <HashLink to="#">
                    <b>BR</b> Architects
                </HashLink>
            </div>
            <div className="headerNav">
                <HashLink to="#projects">Projects</HashLink>
                <HashLink to="#about">About</HashLink>
                <HashLink to="#contact">Contact</HashLink>
            </div>
        </HeaderContainer>
    );
};

export default Header;
