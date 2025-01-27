import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* Reset básico */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, sans-serif;
     background-color: #002B28 ;
    color: #333; /* Cor do texto */
    min-height: 100vh; /* Garante que a altura seja 100% da viewport */
    display: flex;
    flex-direction: column;
    
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
