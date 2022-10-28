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

    $breakpoint-mobile: 335px;
    $breakpoint-tablet: 758px;
    $breakpoint-desktop: 1024px;

    @mixin mobile {
        @media (max-width: #{$breakpoint-tablet - 1px}) {
            @content;
        }
    }

    @mixin tablet {
        @media (min-width: #{$breakpoint-tablet}) and (max-width: #{$breakpoint-desktop - 1px}) {
            @content;
        }
    }

    @mixin desktop {
        @media (min-width: #{$breakpoint-desktop}) {
            @content;
        }
    }


`;

export default GlobalStyles;
