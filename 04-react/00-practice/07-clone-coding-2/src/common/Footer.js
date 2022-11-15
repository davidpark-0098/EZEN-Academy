import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
    width: 100%;
    height: 84px;
    padding: 16px 0;
    box-sizing: border-box;
    text-align: center;
    background-color: black;
    line-height: 52px;

    p {
        font-size: 15px;
        color: #f1f1f1;
        a {
            font-size: 15px;
            color: #f1f1f1;
            text-decoration: underline;
        }
    }
`;

const Footer = () => {
    return (
        <FooterContainer>
            <p>
                Powered by
                <a href="https://www.w3schools.com/w3css/default.asp" target="_blank" rel="noreferrer">
                    w3.css
                </a>
            </p>
        </FooterContainer>
    );
};

export default Footer;
