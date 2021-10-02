import styled from "styled-components";

export const Container = styled.div`
  background: var(--background);
  
`;

export const Content = styled.div`
  
  display: flex;

  @media (max-width: 850px) {
    max-width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .barleft {
    width: 6.5rem;
    height: 45rem;
  
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 850px) {
        max-width: 100%;
        height: 6.5rem;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    @media (max-width: 750px) {
        max-width: 100%;
        height: 6.5rem;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    } 

    @media (max-width: 550px) {
      max-width: 25rem;
      height: auto;
      margin: 0;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      a {
        margin-left: 0.5rem;
        margin-right: 0.5rem;
      }
    }

    img {
      width: 3.5rem;
    }

    a {
      margin-bottom: 2rem;

      @media (max-width: 850px) {
        margin-top: 1.5rem;
        margin-right: 2rem;
        margin-left: 2rem;
      }

      @media (max-width: 550px) {
        margin-top: 1.5rem;
        margin-right: 1.2rem;
        margin-left: 1.2rem;
      }
    }
  }

  .photo {
    max-width: 30rem;
    height: 45rem;

    @media (max-width: 750px) {
      height: auto;  

      img {
        width: 22rem; 
      }
    }

   
   
  }

  .info {
    width: 48rem;
    height: 45rem;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 850px) {
      max-width: 40rem;
      max-height: 25rem;
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

    h1 {
      color: var(--pink);
      font-size: 4rem;
      font-family: 'Poppins', sans-serif;

      @media(max-width: 750px) {
        font-size: 2.5rem;
      }
    }

    p {
      color: var(--pink);
      font-size: 24px;
      font-family: 'Poppins', sans-serif;

      @media (max-width: 750px) {
        font-size: 1.5rem;
      }
      
    }

    .separator {
      width: 42rem;
      margin-top: 0.5rem;
      margin-bottom: 1rem;

      display: flex;
      align-items: center;
      justify-content: space-around;

      @media (max-width: 850px) {
        max-width: 40rem;

        display: flex;
        align-items: center;
        justify-content: space-around;

      }

      @media(max-width: 750px) {
        width: 30rem
      }
    }

    .buttons {
        width: 13.5rem;
        margin-top: 1rem;
        
      
        display: flex;
        align-items: center;
        justify-content: space-around;

        @media (max-width: 750px) {
          img {
            width: 3.8rem;
            }
        }
      }

  }
`;