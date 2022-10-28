import React from "react";
import styled from "styled-components";
import mq from "../MediaQuery";

const HeaderContainer = styled.header`
    .jumbotron {
        padding: 80px;
        text-align: center;
        background-color: #1abc9c;
        color: white;

        h1 {
            font-size: 46px;
            font-weight: 700;
            margin-bottom: 15px;
        }

        p {
            font-size: 20px;
        }

        ${mq.maxWidth("sm")`
            padding: 40px;

            h1 {
                font-size: 32px;
                marign-bottom: 7px;
            }

            p {
                font-size: 12px;
            }
        `}
    }
`;

const Header = () => {
    return (
        <HeaderContainer>
            <div className="jumbotron">
                <h1>My website</h1>
                <p>React.js Layout Template</p>
            </div>
        </HeaderContainer>
    );
};

export default Header;