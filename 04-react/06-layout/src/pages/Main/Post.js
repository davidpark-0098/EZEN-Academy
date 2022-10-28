import React from "react";
import styled from "styled-components";
import FakeImg from "../../common/FakeImg";
import mq from "../../MediaQuery";

const PostContainer = styled.section`
    flex: 0 1 auto;
    background-color: white;
    padding: 20px;
    box-sizing: border-box;

    ${mq.maxWidth("sm")`
        flex: none;
        width: 100%;
    `}

    h2 {
        font-size: 24px;
        font-weight: 700;
        margin: 10px auto;
    }

    h3 {
        font-size: 18px;
        font-weight: 500;
        margin: 10px auto;
    }

    p {
        font-size: 14px;
        font-weight: 400;
        margin-bottom: 7px;
    }
`;

const Post = () => {
    return (
        <div>
            {[0, 1, 2, 3].map((v, i) => {
                return (
                    <PostContainer key={i}>
                        <h2>TITLE HEADING</h2>
                        <h3>Title description, Dec 7, 2017</h3>
                        <FakeImg height="200">Image</FakeImg>
                        <p>Some text..</p>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi cupiditate, recusandae alias sit aperiam cumque. Alias in
                            consequuntur fuga, enim quibusdam laudantium quod eveniet voluptate maxime voluptas dolore cumque veniam.
                        </p>
                        <br />
                    </PostContainer>
                );
            })}
        </div>
    );
};

export default Post;