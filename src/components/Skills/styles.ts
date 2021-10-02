import styled from "styled-components";

export const Container = styled.div`
  background: var(--background);

  
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

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

      @media (max-width: 850px) {
        max-width: 100%;
        height: auto;
        margin: 0;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      @media (max-width: 750px) {
        max-width: 30rem;
        height: auto;
        margin: 0;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      @media(max-width: 550px) {
        max-width: 20rem;
        height: auto;
      }

  .content-left {
    width: 40rem;
    height: 45rem;
    margin-left: 7rem;
    
    display: flex;
    flex-direction: column;

    @media (max-width: 850px) {
        max-width: 100%;
        height: auto;
        margin: 0;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      @media (max-width: 750px) {
        max-width: 30rem;
        height: auto;
        margin: 0;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

    .skills {
      width: 35rem;
      height: 6rem;

      display: flex;
      align-items: center;
      

      .bar {
        width: 26.5rem;
        height: 4rem;
        margin-right: 0.5rem;

        display: flex;
        align-items: center;
        justify-content: space-around;

        @media (max-width: 750px) {
          width: 20rem;
          margin-left: 5rem;

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
      }
      .icons {
        width: 4.5rem;
        height: 4.8rem;
      }

      .icons1{
        width: 4rem;
        height: 4rem;
      }
    }
  }

  .content-rigth {

    width: 40rem;
    height: 45rem;

    @media(max-width: 750px) {
      max-width: 30rem;
      height: auto;
      margin: 0;

      display: flex;
      flex-direction: column;
      align-items: center;

    }

      @media(max-width: 550px) {
        max-width: 20rem;
        height: auto;
      }

    .education {
      width: 29.5rem;
      height: 8.3rem;
      margin-top: 2rem;

      @media (max-width: 750px) {
        max-width: 22rem;
        height: auto;
        margin: 0;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      
        img {
          width: 13rem;
          margin-top: 1.5rem;
        }

        p {
          margin-top: 1rem;
        }
      }

      @media(max-width: 550px) {
        max-width: 20rem;
        height: auto;
      }
    }
  }
`;