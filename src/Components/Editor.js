// Libraries
import React from 'react';
import styled from 'styled-components';

const StyledEditor = styled.textarea`
  width: 90%;
  height: 25vh;
  border: 1px solid red;
  resize: none;
`;

function Editor() {
  return <StyledEditor></StyledEditor>;
}

export default Editor;
