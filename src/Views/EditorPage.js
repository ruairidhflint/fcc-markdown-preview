// Libraries
import React, { useEffect, useState } from 'react';

// Components
import Editor from '../Components/Editor';
import Preview from '../Components/Preview';

// Default
import { defaultText } from '../Assets/defaultText';

// Styles
import { StyledEditorContainer } from './EditorPageStyle';

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
