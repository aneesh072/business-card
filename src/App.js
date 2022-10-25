import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import WebFont from 'webfontloader';
import { GlobalStyles } from './theme/GlobalStyles';
import { useTheme } from './theme/useTheme';
import Form from './components/Form';
import ThemeSelector from './ThemeSelector';

const Container = styled.div`
  margin: 5px auto 5px auto;
`;

const App = () => {
  const { theme, themeLoaded, getFonts } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  useEffect(() => {
    setSelectedTheme(theme);
  }, [themeLoaded]);

  useEffect(() => {
    WebFont.load({
      google: {
        families: getFonts(),
      },
    });
  });
  return (
    <>
      {themeLoaded && (
        <ThemeProvider theme={selectedTheme}>
          <GlobalStyles />
          <Container style={{ fontFamily: selectedTheme.font }}>
            <h1>Card Builder</h1>
            <ThemeSelector setter={setSelectedTheme} />
            <Form />
          </Container>
        </ThemeProvider>
      )}
    </>
  );
};

export default App;
