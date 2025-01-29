import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* Reset básico */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
     margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
   margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
    min-height: 100vh; /* Garante que a página ocupe toda a altura da viewport */
    display: flex;
    flex-direction: column;
    background-color: #002B28;
    
  }

  #root {
    display: flex;
    flex-direction: column;
    height: 100vh; /* Para ocupar toda a altura disponível */
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
