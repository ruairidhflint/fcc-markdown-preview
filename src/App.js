import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './Styles/globalStyles';

import { theme } from './Styles/themes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App"></div>
    </ThemeProvider>
  );
}

export default App;
