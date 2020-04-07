// Libraries
import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { StyledRetroMarkdown } from '../Styles/markDownStyle';
import { StyledPreview } from './PreviewStyle';

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
