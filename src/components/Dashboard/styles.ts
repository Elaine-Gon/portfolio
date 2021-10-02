import styled from "styled-components";

export const Container = styled.main`
  max-width: 100%;
  margin: 0;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  `;

  export const Footer = styled.footer`

    width: 100%;
    height: 2rem;
    background-color: var(--pink);

    display: flex;
    align-items: center;
    justify-content: center;

    color: var(--background);
    font-family: 'Poppins', sans-serif;
    font-size: 24px;

    @media (max-width: 750px) {
      max-width: 100%;
      height: auto;
      margin: 0;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      font-size: 1.3rem;
    }
`;