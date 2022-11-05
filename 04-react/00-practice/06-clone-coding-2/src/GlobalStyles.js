import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import mq from './MediaQuery';

const GlobalStyles = createGlobalStyle`
    ${reset}

    body{font-family:Verdana,sans-serif; font-size:15px; line-height:1.5}
    h1{font-size:36px}
    h3{font-size:24px}
    h1, h3{font-family:"Segoe UI", Arial, sans-serif; font-weight:400; margin:10px 0}
    a {text-decoration: none;}
    hr {
        margin: 10px 0;
        border: 0.6px solid #dbdbdb63;
    }
    /* main */
    main {
        width: 1500px;
        margin: 0 auto;
        padding: 0 32px;
        box-sizing: border-box;
    ${mq.maxWidth('xxl')`
        width: 100%;
    `}
    }
`;

export default GlobalStyles;
