// Libraries
import React, { useState } from 'react';
import styled from 'styled-components';

// Components
import Editor from '../Components/Editor';
import Preview from '../Components/Preview';

const defaultText = "# This is a header\n## This a secondary header\n[This is a link](https://rory.codes)\nWe can inline code snippets like `this`\nor we can create code blocks like this:\n```\nfunction isThisCool(){\n    console.log(true)\n}\n```\nWe can make lists\n- like\n- this\n\n\n> We can use blockquote, no problem!\n\nOr we can __emphasise__ text with double underscores.\n\nAnd of course, images work too!\n\n![Our alt text goes here](http://localhost:3000/static/media/image-preview.49d8f90b.png)";


const StyledEditorContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 5rem;
`;
function EditorPage() {
  const [input, setInput] = useState(defaultText);

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
