import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
        font-size: 12px;
    }

    body {
        font-family: "Raleway", sans-serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
    }
`;

export default GlobalStyle;
