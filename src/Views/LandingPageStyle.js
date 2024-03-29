import styled from 'styled-components';

export const StyledLanding = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: ${(props) => props.theme.titleFont};
    font-size: 7rem;
    max-width: 80%;
    margin: 1rem;
    text-align: center;

    @media (max-width: 750px) {
      max-width: 90%;
    }

    @media (max-width: 500px) {
      font-size: 5rem;
    }
  }

  p {
    font-size: 2rem;
    width: 40%;
    text-align: center;
    line-height: 2.3rem;

    a {
      text-decoration: underline;
      transition: opacity 0.2s ease-in-out;

      :hover {
        opacity: 0.5;
        transition: opacity 0.2s ease-in-out;
      }
    }

    @media (max-width: 750px) {
      width: 80%;
    }

    @media (max-width: 500px) {
      font-size: 1.7rem;
      line-height: 2rem;
    }
  }
  #start-button {
    display: block;
    width: 16rem;
    height: 4rem;
    color: white;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.8rem;
    border-radius: 0.5rem;
    margin-top: 1.5rem;
    transition: transform 0.3s ease-in-out;

    :hover {
      transition: transform 0.3s ease-in-out;
      transform: scale(1.08);
    }
  }
`;
