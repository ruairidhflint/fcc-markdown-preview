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
  margin: 5rem 0 0 0;

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

      &#save {
        color: ${(props) => props.theme.green};
      }

      &#copy {
        color: ${(props) => props.theme.orange};
      }

      &#clear {
        color: red;
        font-size: 1.2rem;
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
  const [confirmClear, setConfirmClear] = useState(false);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const save = () => {
    localStorage.setItem('savedInput', JSON.stringify(input));
  };

  const clear = () => {
    if (!confirmClear) {
      setConfirmClear(true);
    } else {
      localStorage.clear();
      setInput('');
      setConfirmClear(false);
    }
  };

  const download = () => {
    let blob = new Blob([input], { type: 'txt' });

    let a = document.createElement('a');
    a.download = 'markdown';
    a.href = URL.createObjectURL(blob);
    a.dataset.downloadurl = ['txt', a.download, a.href].join(':');
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function () {
      URL.revokeObjectURL(a.href);
    }, 1500);
  };

  useEffect(() => {
    const saved = localStorage.getItem('savedInput');
    if (saved) {
      setInput(JSON.parse(saved));
    } else {
      setInput(defaultText);
    }
  }, []);

  return (
    <StyledEditorContainer id="main">
      <Editor
        handleChange={handleChange}
        input={input}
        save={save}
        confirmClear={confirmClear}
        clear={clear}
      />
      <Preview markdown={input} download={download} />
    </StyledEditorContainer>
  );
}

export default EditorPage;
