// Libraries
import React, { useState, useEffect } from 'react';

// Styles
import { StyledInputContainer, StyledEditor } from './EditorStyle';

function Editor({ input, handleChange, save, clear, confirmClear }) {
  const [saved, setSaved] = useState(false);
  const callSave = () => {
    save();
    setSaved(true);
  };

  useEffect(() => {
    setSaved(false);
  }, [input]);
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
