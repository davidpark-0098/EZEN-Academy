import React from "react";
import styled from "styled-components";
import FakeImg from "../../common/FakeImg";
import mq from "../../MediaQuery";

const SideContainer = styled.div`
    box-sizing: border-box;
    width: 360px;
    flex: none;
    border-right: 1px solid #d5d5d5;
    background-color: #eeeeee;
    padding: 20px;

    h2 {
        font-size: 24px;
        font-weight: 700;
        margin: 10px auto;
    }

    h3 {
        font-size: large;
        font-weight: 500;
        margin: auto auto;
    }

    p {
        font-size: 14px;
        font-weight: 400;
        margin-bottom: 7px;
    }

    ${mq.maxWidth("sm")`
        width: 100%;
    `}
`;

const Side = () => {
    return (
        <SideContainer>
            <h2>About Me</h2>
            <h3>Photo of me:</h3>
            <FakeImg height="200">Image</FakeImg>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi cupiditate, recusandae alias sit aperiam cumque. Alias in consequuntur fuga, enim
                quibusdam laudantium quod eveniet voluptate maxime voluptas dolore cumque veniam.
            </p>
            <h2>More Text</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <FakeImg height="60">Image</FakeImg>
            <br />
            <FakeImg height="60">Image</FakeImg>
            <br />
            <FakeImg height="60">Image</FakeImg>
        </SideContainer>
    );
};

export default Side;