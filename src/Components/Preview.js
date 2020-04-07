// Libraries
import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

import {StyledMarkdown} from '../Styles/markDownStyle';

const StyledPreview = styled.div`
  width: 90%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  justify-content: space-between;

  .editor-preview {
    font-size: 2.2rem;
    margin-left: 1.5rem;
  }

  #preview {
    width: 100%;
    height: 93%;
    padding: 1.5rem;
    border: 1px solid rgba(10,10,10,0.2);
    border-radius: 0.6rem;
    box-sizing: border-box;
  }
`;

function Preview({ markdown }) {
  return (
    <StyledPreview>
      <h2 className="editor-preview">Preview</h2>
      <StyledMarkdown id="preview">
        <ReactMarkdown source={markdown} />
      </StyledMarkdown>
    </StyledPreview>
  );
}

export default Preview;
