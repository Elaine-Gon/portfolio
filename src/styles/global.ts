import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #1A1423;
    --pink: #C33C54;
    --gray: #A9A9A9;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html { 
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }
  body { 
    background: #1A1423;
    -webkit-font-smoothing: antialiased;
  }
`;