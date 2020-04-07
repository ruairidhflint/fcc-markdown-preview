// Libraries
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

// Components
import Editor from '../Components/Editor';
import Preview from '../Components/Preview';

// Default 
import { defaultText } from '../Assets/defaultText';

const StyledEditorContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 5rem 0;

  .editor-preview {
      width: 100%;
      display: flex;
      justify-content: space-between;
    h2 {
      font-size: 2.2rem;
      margin: 0 0 1.5rem 1.5rem;
    }

    button {
        background-color: inherit;
        border: none;
        font-size: 1.3rem;
        transition: opacity 0.3s ease-in-out;
        cursor: pointer;

        &#save{
            color: ${props => props.theme.green};
        }
        
        &#copy{
            color: ${props => props.theme.orange};
        }

        &#clear{
            color: red;
        }

        :hover {
            opacity: 0.5;
            transition: opacity 0.3s ease-in-out;
        }

        :focus {
            outline: none;
        }
    }
  }
`;
function EditorPage() {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const save = () => {
      localStorage.setItem('savedInput', JSON.stringify(input));
  }

  const clear = () => {
      localStorage.clear();
      setInput('');
  }

  const copy = () => {
      document.execCommand('copy')
  }

  useEffect(() => {
      const saved = localStorage.getItem('savedInput');
      if(saved){
      setInput(JSON.parse(saved));
      } else {
          setInput(defaultText)
      }
  }, []);

  return (
    <StyledEditorContainer id="main">
      <Editor handleChange={handleChange} input={input} save={save} clear={clear} />
      <Preview markdown={input} />
    </StyledEditorContainer>
  );
}

export default EditorPage;
