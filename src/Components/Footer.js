// Libraries
import React from 'react';

// Styles
import { StyledFooter } from './FooterStyle';

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
