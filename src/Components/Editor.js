// Libraries
import React from 'react';
import styled from 'styled-components';

const StyledInputContainer = styled.div`
width: 90%;
`

const StyledEditor = styled.textarea`
  width: 100%;
  height: 25vh;
  background-color: ${(props) => props.theme.textArea};
  border: none;
  border-radius: 0.6rem;
  resize: none;
  box-sizing: border-box;

  padding: 1rem;
  font-size: 1.5rem;
`;

function Editor({ input, handleChange }) {
  return (
    <StyledInputContainer>
        <h2 className="editor-preview">Input</h2>
      <StyledEditor
        onChange={handleChange}
        value={input}
        id="editor"
      ></StyledEditor>
    </StyledInputContainer>
  );
}

export default Editor;
