// Libraries
import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  width: 100%;
  height: 7rem;
  display: flex;
  justify-content: center;
  align-items: center;

  h3 {
    font-size: 1.5rem;

    a {
      color: ${(props) => props.theme.black};
      text-decoration: underline;
      transition: color 0.2s ease-in-out;

      :hover {
        transition: color 0.2s ease-in-out;
        color: ${(props) => props.theme.orange};
      }
    }
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <h3>
        Built by{' '}
        <a href="https://rory.codes" target="_blank" rel="noopener noreferrer">
          Rory Flint
        </a>
      </h3>
    </StyledFooter>
  );
}

export default Footer;
