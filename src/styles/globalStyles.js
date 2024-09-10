// src/styles/globalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: #f3f4f6;
    color: #111827;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: bold;
    margin-bottom: 10px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    transition: background-color 0.3s;
  }
`;

export default GlobalStyles;
