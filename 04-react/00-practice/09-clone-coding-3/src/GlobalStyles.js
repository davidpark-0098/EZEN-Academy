import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import mq from "./MediaQuery";

const GlobalStyles = createGlobalStyle`
    ${reset}

    body,h1,h2,h3,h4,h5,h6 {font-family: "Karma", sans-serif}
    b {font-weight: 700;}
    figcaption {line-height: 0;}
    a {text-decoration: none;}
    h1, h3 {font-size: 24px;}
    p {font-size: 15px; margin: 15px 0;}
    hr {border: 0;
        border-top: 1px solid $line;
        margin: 20px 0;
    }

    $line: #eee;
    $choose: #ccc;
    $notchoose: #616161;



`;

export default GlobalStyles;
