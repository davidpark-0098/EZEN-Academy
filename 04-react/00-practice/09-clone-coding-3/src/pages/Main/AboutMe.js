import React from "react";
import styled from "styled-components";

const AboutContainer = styled.section`
    max-width: 1200px;
    margin: 0 auto;
    box-sizing: border-box;
    text-align: center;
    padding: 32px 16px;
    h3 {
        font-size: 24px;
        margin: 10px 0 32px;
    }
    figure {
        max-width: 800px;
        margin: 0 auto;
    img {
        width: 100%;
    }
}
    article {
        display: flex;
        flex-direction: column;
        align-items: center;
        box-sizing: border-box;
        padding: 32px 0;
        b {
            font-size: 20px;
        }
        i {
            margin-top: 20px;
            font-size: 16px;
            font-style: italic;
        }
        p {
            margin: 15px 0;
            line-height: 23px;
        }
    }
`;

const AboutMe = () => {
    return (
        <AboutContainer id="about_me">
            <h3>About Me, The Food Man</h3>
            <figure>
            <img src="https://www.w3schools.com/w3images/chef.jpg" alt="About Me, The Food Man" />
            </figure>
            <article>
                <b>I am Who I Am!</b>
                <i>With Passion For Real, Good Food</i>
                <p>
                    Just me, myself and I, exploring the universe of unknownment. I have a heart of love and an interest of lorem ipsum and mauris neque quam
                    blog. I want to share my world with you. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies
                    congue gravida diam non fringilla. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies
                    congue gravida diam non fringilla.
                </p>
            </article>
        </AboutContainer>
    );
};

export default AboutMe;
