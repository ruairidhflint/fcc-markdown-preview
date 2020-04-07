// Libraries
import React, { useState } from 'react';
import styled from 'styled-components';

// Components
import Editor from '../Components/Editor';
import Preview from '../Components/Preview';

const StyledEditorContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 5rem;
`;
function EditorPage() {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <StyledEditorContainer id="main">
      <Editor handleChange={handleChange} input={input} />
      <Preview markdown={input} />
    </StyledEditorContainer>
  );
}

export default EditorPage;
