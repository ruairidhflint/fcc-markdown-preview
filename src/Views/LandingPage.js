// Libraries
import React from 'react';

// Styles
import { StyledLanding } from './LandingPageStyle';

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
