import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`


    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }


    body {
        -webkit-font-smoothing: antialiased;
    }

    body, input, button, textarea {
        font-family: 'Heebo', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6 {
        font-size: 28px;
        font-weight: 300;
        line-height: 40px;;
    }
`;
