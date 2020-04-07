// Libraries
import React from 'react';
import styled from 'styled-components';

const StyledEditor = styled.textarea`
  width: 90%;
  height: 25vh;
  border: 2px solid black;
  resize: none;
`;

function Editor({ input, handleChange }) {
  return <StyledEditor onChange={handleChange} value={input} id="editor"></StyledEditor>;
}

export default Editor;
