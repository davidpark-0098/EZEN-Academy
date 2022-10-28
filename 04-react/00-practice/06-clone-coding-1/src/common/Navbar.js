import React from "react";
import styled from "styled-components";
import { HashLink } from "react-router-hash-link";

const NavContainer = styled.nav`
    width: 100%;
    height: 55px;
    background-color: #f5f5f5;
    box-shadow: 0 5px 80px 10px gray;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 16px;
    box-sizing: border-box;
    position: fixed;
    z-index: 5000;

    .nav_top {
        width: 240px;
        height: 39px;
        a {
            display: block;
            text-align: center;
            line-height: 39px;
            letter-spacing: 3px;
            color: black;
            transition-duration: 350ms;
        }

        a:hover {
            background-color: #dbdbdb;
        }
    }

    .nav_sub {
        display: flex;
        width: 270px;
        height: 39px;
        text-align: center;
        padding: 8px 16px;
        a {
            width: 90px;
            height: 39px;
            line-height: 39px;
            letter-spacing: 3px;
            color: black;
            transition-duration: 350ms;
        }
        a:hover {
            background-color: #dbdbdb;
        }
    }
`;

function Navbar() {
    return (
        <NavContainer>
            <div className="nav_top">
                <HashLink to="#">Gourmet au Catering</HashLink>
            </div>
            <div className="nav_sub">
                <HashLink to="#about">About</HashLink>
                <HashLink to="#menu">Menu</HashLink>
                <HashLink to="#contact">Contact</HashLink>
            </div>
        </NavContainer>
    );
}

export default Navbar;