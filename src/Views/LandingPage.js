// Libraries
import React from 'react';
import styled from 'styled-components';

const StyledLanding = styled.div`
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
  }
`;

function LandingPage() {
  return (
    <StyledLanding>
      <h1>Markdown Preview</h1>
      <p>
        A simple way to edit and preview your Markdown content in the browser.
        Click{' '}
        <a
          href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>{' '}
        for more information on Markdown or alternatively:
      </p>
      <a id="start-button" href="#main">
        Get Started
      </a>
    </StyledLanding>
  );
}

export default LandingPage;
