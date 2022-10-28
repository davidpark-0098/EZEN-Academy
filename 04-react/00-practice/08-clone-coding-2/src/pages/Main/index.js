import React, { useCallback, memo } from "react";
import styled from "styled-components";

import RegexHelper from "../../helper/RegexHelper";

import mq from "../../MediaQuery";

const JumbotronContainer = styled.section`
    width: 100%;
    height: auto;
    position: relative;

    img {
        width: 100%;
        object-fit: cover;
    }

    div {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        align-items: center;

        span {
            display: block;
            width: 86px;
            height: 64px;
            background-color: rgba(0, 0, 0, 0.74);
            text-align: center;
            line-height: 64px;
            margin-right: 10px;

            b {
                font-size: 36px;
                font-weight: bold;
                align-items: center;
                color: #f1f1f1;
            }
        }

        h1 {
            font-size: 36px;
            letter-spacing: 5px;
            align-items: center;
            color: #f1f1f1;

            ${mq.maxWidth("sm")`
                display: none;
            `}
        }
    }
`;

const ProjectContainer = styled.section`
    padding-top: 32px;
    box-sizing: border-box;

    h3 {
        font-size: 24px;
        padding: 15px 0 5px;
        box-sizing: border-box;
    }

    section {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 40px;

        article {
            width: 25%;
            height: auto;
            position: relative;
            padding: 0 8px;
            box-sizing: border-box;

            ${mq.maxWidth("lg")`
                width: 50%;
            `}
            ${mq.maxWidth("sm")`
                width: 100%;
            `}

            div {
                width: 120px;
                height: 38px;
                font-size: 15px;
                background-color: black;
                color: #f1f1f1;
                text-align: center;
                line-height: 38px;
                position: absolute;
            }

            img {
                display: block;
                width: 100%;
                object-fit: cover;
            }

            & {
                margin-bottom: 32px;
            }
        }
    }
`;

const AboutContainer = styled.section`
    padding-top: 32px;
    box-sizing: border-box;

    h3 {
        font-size: 24px;
        padding: 15px 0 5px;
        box-sizing: border-box;
    }

    p {
        box-sizing: border-box;
        font-size: 15px;
    }

    section {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 40px;

        article {
            width: 25%;
            padding: 0 8px;
            box-sizing: border-box;
            margin-bottom: 32px;

            ${mq.maxWidth("lg")`
                width: 50%;
            `}
            ${mq.maxWidth("sm")`
                width: 100%;
            `}

            img {
                width: 100%;
                -ms-filter: grayscale(0.7);
                -webkit-filter: grayscale(0.7);
                -moz-filter: grayscale(0.7);
                -o-filter: grayscale(0.7);
                filter: grayscale(0.7);
            }

            p {
                font-size: 15px;
                margin: 15px 0;
            }

            #job {
                opacity: 0.65;
            }

            div {
                height: 38px;
                background-color: #f1f1f1;
                font-size: 15px;
                text-align: center;
                line-height: 38px;
                cursor: pointer;
            }
        }
    }
`;

const ContactContainer = styled.section`
    padding: 32px 0 32px;
    box-sizing: border-box;

    h3 {
        padding: 15px 0 5px;
        font-size: 24px;
        box-sizing: border-box;
    }

    p {
        padding: 5px 0 15px;
        box-sizing: border-box;
        font-size: 15px;
    }

    form {
        input {
            width: 100%;
            height: 42px;
            margin-bottom: 8px;
            padding: 8px;
            box-sizing: border-box;
            border: 1px solid #dbdbdb;
            font-size: 16px;
        }

        button {
            width: 150px;
            height: 38px;
            background-color: black;
            font-size: 15px;
            color: #f1f1f1;
            margin: 16px 0;
            transition-duration: 350ms;
            border: none;
            cursor: pointer;

            &:hover {
                background-color: #dbdbdb;
                color: black;
            }
        }
    }
`;

const MapContainer = styled.section`
    img {
        width: 100%;
    }
`;

const index = memo(() => {
    const onSubmitButtonClick = useCallback((e) => {
        e.preventDefault();

        const regexHelper = RegexHelper.getInstance();

        try {
            regexHelper.value(document.querySelector("#name"), "이름을 입력하세요.");
            regexHelper.value(document.querySelector("#email"), "이메일을 입력하세요.");
            regexHelper.value(document.querySelector("#subject"), "서브젝트를 입력하세요.");
            regexHelper.value(document.querySelector("#comment"), "코멘트를 입력하세요.");
        } catch (e) {
            alert(e.message);
            console.error(e);
            e.selector.focus();
            return;
        }
        alert("입력 완료!");
    }, []);

    return (
        <main>
            <JumbotronContainer>
                <img src="https://www.w3schools.com/w3images/architect.jpg" alt="img1" />
                <div>
                    <span>
                        <b>BR</b>
                    </span>
                    <h1>Architects</h1>
                </div>
            </JumbotronContainer>

            <ProjectContainer id="projects">
                <h3>Projects</h3>
                <hr />
                <section>
                    <article>
                        <div>Summer House</div>
                        <img src="https://www.w3schools.com/w3images/house5.jpg" alt="Summer House" />
                    </article>
                    <article>
                        <div>Brick House</div>
                        <img src="https://www.w3schools.com/w3images/house2.jpg" alt="Brick House" />
                    </article>
                    <article>
                        <div>Renovated</div>
                        <img src="https://www.w3schools.com/w3images/house3.jpg" alt="Renovated" />
                    </article>
                    <article>
                        <div>Barn House</div>
                        <img src="https://www.w3schools.com/w3images/house4.jpg" alt="Barn House" />
                    </article>
                    <article>
                        <div>Summer House</div>
                        <img src="https://www.w3schools.com/w3images/house2.jpg" alt="Summer House" />
                    </article>
                    <article>
                        <div>Brick House</div>
                        <img src="https://www.w3schools.com/w3images/house5.jpg" alt="Brick House" />
                    </article>
                    <article>
                        <div>Renovated</div>
                        <img src="https://www.w3schools.com/w3images/house4.jpg" alt="Renovated" />
                    </article>
                    <article>
                        <div>Barn House</div>
                        <img src="https://www.w3schools.com/w3images/house3.jpg" alt="Barn House" />
                    </article>
                </section>
            </ProjectContainer>

            <AboutContainer id="about">
                <h3>About</h3>
                <hr />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <section>
                    <article>
                        <img src="https://www.w3schools.com/w3images/team2.jpg" alt="John Doe" />
                        <h3>John Doe</h3>
                        <p>CEO & Founder</p>
                        <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                        <div>Contact</div>
                    </article>
                    <article>
                        <img src="https://www.w3schools.com/w3images/team1.jpg" alt="Jane Doe" />
                        <h3>Jane Doe</h3>
                        <p>Architect</p>
                        <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                        <div>Contact</div>
                    </article>
                    <article>
                        <img src="https://www.w3schools.com/w3images/team3.jpg" alt="Mike Ross" />
                        <h3>Mike Ross</h3>
                        <p>Architect</p>
                        <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                        <div>Contact</div>
                    </article>
                    <article>
                        <img src="https://www.w3schools.com/w3images/team4.jpg" alt="Dan Star" />
                        <h3>Dan Star</h3>
                        <p>Architect</p>
                        <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                        <div>Contact</div>
                    </article>
                </section>
            </AboutContainer>

            <ContactContainer id="contact">
                <h3>Contact</h3>
                <hr />
                <p>Lets get in touch and talk about your next project.</p>
                <form id="join_form">
                    <input type="text" placeholder="Name" id="name" />
                    <input type="text" placeholder="Email" id="email" />
                    <input type="text" placeholder="Subject" id="subject" />
                    <input type="text" placeholder="Comment" id="comment" />
                    <button type="submit" onClick={onSubmitButtonClick}>
                        SEND MESSAGE
                    </button>
                </form>
            </ContactContainer>

            <MapContainer>
                <img src="https://www.w3schools.com/w3images/map.jpg" alt="city" />
            </MapContainer>
        </main>
    );
});

export default index;
