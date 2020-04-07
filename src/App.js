// Libraries
import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './Styles/globalStyles';

// Styling
import { theme } from './Styles/themes';

// Views
import LandingPage from './Views/LandingPage';
import EditorPage from './Views/EditorPage';
import Footer from './Components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
        <LandingPage />
        <EditorPage />
        <Footer />
    </ThemeProvider>
  );
}

export default App;
