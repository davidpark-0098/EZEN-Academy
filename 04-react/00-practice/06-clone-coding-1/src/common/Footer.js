import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
    width: 100%;
    height: 116px;
    padding: 32px 0;
    box-sizing: border-box;
    text-align: center;
    line-height: 52px;
    background-color: #f1f1f1;

    a {
        text-decoration: underline;
    }
`;

function Footer() {
    return (
        <FooterContainer>
            <p>
                Powered by{" "}
                <a href="https://www.w3schools.com/w3css/default.asp" target="_blank" rel="noreferrer">
                    w3.css
                </a>
            </p>
        </FooterContainer>
    );
}

export default Footer;