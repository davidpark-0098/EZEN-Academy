import React from "react";
import styled from "styled-components";
import mq from "../../MediaQuery";

const AboutContainer = styled.section`
    width: 1100px;
    margin: 0 auto;
    display: flex;
    padding: 64px 0;
    box-sizing: border-box;

    ${mq.maxWidth("xl")`
        width: 100%;
    `}

    .about_catering_img {
        width: 550px;
        padding: 12px 24px;
        box-sizing: border-box;
        ${mq.maxWidth("xl")`
            width: 50%;
            padding: 12px 24px;
            box-sizing: border-box;
        `}

        ${mq.maxWidth("sm")`
            display: none;
        `}

        img {
            width: 502px;
            height: 628px;
            opacity: 0.85;
            ${mq.maxWidth("xl")`
                width: 100%;
                height: auto;
                opacity: 0.85;
            `}
        }
    }

    .about_catering_text {
        width: 550px;
        padding: 12px 24px;
        box-sizing: border-box;
        text-align: center;
        h1 {
            font-size: 36px;
            margin: 10px 0;
        }

        h5 {
            font-size: 18px;
            margin: 10px 0;
        }

        p {
            font-size: 18px;
            margin: 18px 0;
            line-height: 28px;
        }

        span {
            background-color: rgba(0, 0, 0, 0.116);
        }
    }
`;

function About() {
    return (
        <AboutContainer id="about">
            <div className="about_catering_img">
                <img src="https://www.w3schools.com/w3images/tablesetting2.jpg" alt="about_catering_img" />
            </div>
            <div className="about_catering_text">
                <h1>About Catering</h1>
                <br />
                <br />
                <h5>Tradition since 1889</h5>
                <p>
                    The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We
                    only use <span>seasonal</span> ingredients.
                </p>
                <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit,
                    sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                </p>
            </div>
        </AboutContainer>
    );
}

export default About;