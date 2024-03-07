import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
        font-size: 12px;
    }

    body {
        display: flex;
        flex-direction: column;
        position: relative;
        min-height: 100vh;
        font-family: "Raleway", sans-serif;
        background-color: #F1F1F1;
    }
`;

export default GlobalStyle;
