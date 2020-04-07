// Libraries
import React, { useState, useEffect} from 'react';
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

function Editor({ input, handleChange, save, clear, confirmClear }) {
    const [saved, setSaved] = useState(false);
    const callSave = () => {
        save();
        setSaved(true);
    }

    useEffect(() => {
        setSaved(false);
    }, [input])
  return (
    <StyledInputContainer>
      <div className="editor-preview">
        <h2>Input</h2>
        <div className="buttons">
          <button onClick={callSave} id="save">
            {saved ? 'Saved' : 'Save'}
          </button>
          <button onClick={clear} id="clear">
              {confirmClear ? 'Sure?' : 'Clear'}
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
