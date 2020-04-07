// Libraries
import React from 'react';
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
  return (
    <StyledEditorContainer id="main">
      <Editor />
      <Preview />
    </StyledEditorContainer>
  );
}

export default EditorPage;
