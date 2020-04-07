// Libraries
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { StyledRetroMarkdown } from '../Styles/markDownStyle';

const StyledPreview = styled.div`
  width: 90%;
  height: 60vh;

  justify-content: space-between;

  #preview {
    width: 100%;
    height: 78%;
    overflow-y: scroll;
    padding: 1.5rem;
    border: 1px solid rgba(10, 10, 10, 0.2);
    border-radius: 0.6rem;
    box-sizing: border-box;
  }
`;

function Preview({ markdown, download }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setCopied(false);
  }, [markdown]);
  return (
    <StyledPreview>
      <div className="editor-preview">
        <h2>Preview</h2>
        <div className="buttons">
          <CopyToClipboard text={markdown} onCopy={() => setCopied(true)}>
            <button id="copy">{copied ? 'Copied' : 'Copy'} </button>
          </CopyToClipboard>
          <button onClick={download}>Download</button>
        </div>
      </div>
      <StyledRetroMarkdown id="preview">
        <ReactMarkdown source={markdown} />
      </StyledRetroMarkdown>
    </StyledPreview>
  );
}

export default Preview;
