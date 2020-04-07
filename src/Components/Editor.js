// Libraries
import React from 'react';
import styled from 'styled-components';

const StyledInputContainer = styled.div`
  width: 90%;
  margin: 5rem 0;
`;

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

function Editor({ input, handleChange, save, clear }) {
  return (
    <StyledInputContainer>
      <div className="editor-preview">
        <h2>Input</h2>
        <div className="buttons">
          <button onClick={save} id="save">
            Save
          </button>
          <button onClick={clear} id="clear">
            Clear
          </button>
        </div>
      </div>
      <StyledEditor
        onChange={handleChange}
        value={input}
        id="editor"
      ></StyledEditor>
    </StyledInputContainer>
  );
}

export default Editor;
