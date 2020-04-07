// Libraries
import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

const StyledPreview = styled.div`
  width: 90%;
  height: 60vh;
  border: 2px solid black;
`;

function Preview({ markdown }) {
  return (
    <StyledPreview>
      <div id="preview">
          <p>{markdown}</p>
      </div>
    </StyledPreview>
  );
}

export default Preview;
