// Libraries
import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './Styles/globalStyles';

// Styling
import { theme } from './Styles/themes';

// Views
import LandingPage from './Views/LandingPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <LandingPage />
      </div>
    </ThemeProvider>
  );
}

export default App;
