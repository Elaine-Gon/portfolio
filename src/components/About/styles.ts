import styled from "styled-components";

export const Container = styled.div`
  background: var(--background);

`;

export const Content = styled.div`

  margin-top: 3rem;
  margin-right: 10rem;

  display: flex;

      h1 {
        color: var(--pink);
        font-family: 'Poppins', sans-serif;
        font-size: 3.8rem;

        @media (max-width: 750px) {
          font-size: 3rem;
        }
      }

      p {
        color: var(--gray);
        font-family: 'Poppins', sans-serif;
        font-size: 24px;

        @media(max-width: 750px) {
          font-size: 1.5rem;
        }

        @media (max-width: 550px) {
          font-size: 1.2rem;
        }
      }

      @media (max-width: 750px) {
        max-width: 30rem;
        height: auto;
        margin: 0 auto;

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

        p {
          font-size: 1.3rem;
        }

        img {
          margin-top: 1rem;
        }
      }
  
      .content-left {
      width: 50rem;
      height: 45rem;

      display: flex;
      flex-direction: column;
      align-items: center;

      @media (max-width: 750px) {
        max-width: 30rem;
        height: auto;
        margin: 0;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

      }

      @media (max-width: 850px) {
        max-width: 30rem;
        height: auto;
          
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
   
    
      .about-me {
      width: 40rem;
      height: 20rem;

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

        @media(max-width: 550px) {
          max-width: 25rem;
          height: auto;
          
          p {
            font-size: 20px;
          }
        }

      }

      .hobbies {
      width: 40rem;
      height: 20rem;

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


      .imagens {
        width: 40rem;
        
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;

          @media (max-width: 750px) {
            width: 30rem;

              img {
                width: 5rem;
              }
          }

          @media (max-width:550px) {
            img {
              width: 4rem;
            }
          }
        }
      }
    }

  .content-rigth {
      width: 25rem;
      height: 45rem;

      display: flex;
      flex-direction: column;

      @media(max-width: 550px){
        width: 25rem;
        height: auto;
      }

      h1 {
        margin-bottom: 1rem;
      }

      .projects {
            
        width: 30rem;
        height: 10rem;

        display: flex;
        flex-direction: column;  
        

        img {
          width: 13rem;
        }

        @media (max-width: 850px) {
          max-width: 30rem;
          height: auto;
            
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          
          }
        
          @media (max-width: 750px) {
          max-width: 30rem;
          height: auto;
            
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          p {
            font-size: 1.8rem;
          }
        
          img {
            width: 14rem;
            margin-bottom: 0.5rem;
          }
        
        }

        @media (max-width: 550px) {
            max-width: 25rem;
            height: auto;

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            p {
              font-size: 20px;
            }

            img {
              margin-top: 1rem;
            }
          }
      }
  }
         
    
`;