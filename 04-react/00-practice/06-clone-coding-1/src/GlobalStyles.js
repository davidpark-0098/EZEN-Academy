import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import mq from "./MediaQuery";

const GlobalStyles = createGlobalStyle`
    ${reset}

    body {
    font-family: "Times New Roman", Georgia, Serif;
    }

    h1, h2, h3, h4, h5, h6 {
    font-family: "Playfair Display";
    letter-spacing: 5px;
    }

    a {
        text-decoration: none;
        color: black;
    }

    hr {
        width: 1100px;
        border: 1px solid #dbdbdb77;
        margin: 0 auto;
        ${mq.maxWidth("xl")`
            width: 90%;
        `}
    }
`;

export default GlobalStyles;