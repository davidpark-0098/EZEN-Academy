import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "./Meta";

const GlobalStyles = createGlobalStyle`
    ${reset}

    * {
        font-family: 'Pretendard';
    }

    body {
        padding: 0;
        margin: 0;
    }
`;

export default GlobalStyles;
