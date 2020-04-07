// Libraries
import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

import { StyledRetroMarkdown } from '../Styles/markDownStyle';

const StyledPreview = styled.div`
  width: 90%;
  height: 60vh;

  justify-content: space-between;

  #preview {
    width: 100%;
    height: 93%;
    overflow-y: scroll;
    padding: 1.5rem;
    border: 1px solid rgba(10, 10, 10, 0.2);
    border-radius: 0.6rem;
    box-sizing: border-box;
  }
`;

function Preview({ markdown }) {
  return (
    <StyledPreview>
      <h2 className="editor-preview">Preview</h2>
      <StyledRetroMarkdown id="preview">
        <ReactMarkdown source={markdown} />
      </StyledRetroMarkdown>
    </StyledPreview>
  );
}

export default Preview;
