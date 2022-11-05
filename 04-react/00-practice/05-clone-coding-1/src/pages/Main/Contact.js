import React from "react";
import styled from "styled-components";
import mq from "../../MediaQuery";

const ContactContainer = styled.section`
    width: 1100px;
    height: 810px;
    margin: 0 auto;
    padding: 64px 16px;
    box-sizing: border-box;

    ${mq.maxWidth("xl")`
        width: 100%;
    `}

    h1 {
        font-size: 36px;
        margin: 10px 0;
    }
    p {
        font-size: 15px;
        margin-top: 15px;
        margin-bottom: 20px;
        line-height: 24px;
    }
    .strong {
        margin: 18px 0;
        b {
            font-size: 18px;
            color: #607b82;
            font-weight: bold;
        }
    }


    form {
        p {
            border-bottom: 1px solid #dbdbdb;
            input {
                width: 100%;
                padding: 16px 8px;
                border: none;
                color: black;
            }
            input::placeholder {
                color: #5b5b5ba8;
            }
        }
        button {
            width: 150px;
            height: 40px;
            margin: 16px 0;
            padding: 8px 16px;
            background-color: #dbdbdb41;
            border: none;
            cursor: pointer;
            transition-duration: 350ms;
        }
        button:hover {
            background-color: #dbdbdb;
        }
    }
`;

function Contact() {
    return (
        <ContactContainer id="contact">
            <h1>Contact</h1>
            <br />
            <br />
            <p>
                We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst
                criteria of them all, both look and taste. Do not hesitate to contact us.
            </p>
            <p className="strong">
                <b>Catering Service, 42nd Living St, 43043 New York, NY</b>
            </p>
            <p>You can also contact us by phone 00553123-2323 or email catering@catering.com, or you can send us a message here:</p>
            <form>
                <p>
                    <input type="text" placeholder="Name" />
                </p>
                <p>
                    <input type="number" placeholder="How many people" />
                </p>
                <p>
                    <input type="datetime-local" defaultValue="2020-11-16T20:00" />
                </p>
                <p>
                    <input type="text" placeholder="Message \ Special requirements" />
                </p>
                <button type="submit">SEND MESSAGE</button>
            </form>
        </ContactContainer>
    );
}

export default Contact;
