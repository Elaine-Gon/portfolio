import styled from "styled-components";

export const Container = styled.div`
  background: var(--background);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  
  
  h1 {
      color: var(--pink);
      font-family: 'Poppins', sans-serif;
      font-size: 48px;

      @media (max-width: 750px) {
        font-size: 3rem;
      }
    }

  p {
    color: var(--gray);
    font-family: 'Poppins', sans-serif;
    font-size: 24px;

    @media (max-width: 750px) {
      font-size: 1.3rem;
    }
  }

  .content {
    width: 67.5rem;
    height: 32rem;
    margin-left: 3rem;

    display: flex;
    flex-direction: column;

    @media (max-width: 750px) {
        max-width: 30rem;
        height: auto;
        margin: 0;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      @media (max-width: 550px) {
        max-width: 25rem;
        height: auto;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        
      }

    .info {
      height: 5.5rem;

      display: flex;
      align-items: center;

      @media (max-width: 750px) {
        max-width: 30rem;
        height: auto;
        margin: 0;

        display: flex;
        align-items: center;
        justify-content: center;
      }
        
      img {
        margin-right: 0.2rem;
        margin-bottom: 1rem;

        @media (max-width: 750px) {
          width: 3.5rem;
        }

        @media (max-width: 550px) {
          width: 2.5rem;
        }
      }

    }
  }
  

`;