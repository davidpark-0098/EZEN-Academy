import React from "react";
import styled from "styled-components";

import mq from "../../MediaQuery"

const JumbotronContainer = styled.section`
    width: 1600px;
    margin: 0 auto;
    position: relative;

    ${mq.maxWidth("xxl")`
        width: 100%;
    `}
    
    img {
        max-width: 100%;
        height: auto;
    }

    div {
        width: 290px;
        height: 100px;
        padding: 12px 24px;
        box-sizing: border-box;
        position: absolute;
        bottom: 0;
        h1 {
            margin: 10px 0;
            font-size: 36px;
            text-align: center;
            line-height: 56px;
            color: #5b5b5b;
        }
    }
`;

function Jumbotron() {
    return (
        <JumbotronContainer>
            <img src="https://www.w3schools.com/w3images/hamburger.jpg" alt="le_cartering" />
            <div>
                <h1>Le Catering</h1>
            </div>
        </JumbotronContainer>
    );
}

export default Jumbotron;
