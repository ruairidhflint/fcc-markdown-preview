// Libraries
import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

const StyledPreview = styled.div`
  width: 90%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: 2.2rem;
  }

  #preview {
    width: 100%;
    height: 93%;
    border: 1px solid black;
  }
`;

function Preview({ markdown }) {
  return (
    <StyledPreview>
      <h2>Preview</h2>
      <div id="preview">
        <ReactMarkdown source={markdown} />
      </div>
    </StyledPreview>
  );
}

export default Preview;
