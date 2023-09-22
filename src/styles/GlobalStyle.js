import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
/* Reset some default styles for consistency */
  body,
  h1,
  h2,
  h3,
  p {
    margin: 0;
    padding: 0;
  }
  /* Your global styles here */
  body {
    font-family: Arial, sans-serif;
    background-color: white;
    color: #333;
  }
  
`;

export default GlobalStyle;