// Libraries
import React from 'react';
import styled from 'styled-components';

const StyledEditor = styled.textarea`
  width: 90%;
  height: 25vh;
  background-color: ${props => props.theme.textArea};
  border: none;
  border-radius: 0.6rem;
  resize: none;
  box-sizing: border-box;   

  padding: 1rem;
  font-size: 1.5rem;
`;

function Editor({ input, handleChange }) {
  return <StyledEditor onChange={handleChange} value={input} id="editor"></StyledEditor>;
}

export default Editor;
