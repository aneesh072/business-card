import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import WebFont from 'webfontloader';
import { GlobalStyles } from './theme/GlobalStyles';
import { useTheme } from './theme/useTheme';
import Form from './components/Form';
import ThemeSelector from './ThemeSelector';
import Dialog from './Dialog';
import CreateThemeContent from './CreateThemeContent';

const Container = styled.div`
  margin: 5px auto 5px auto;
`;

const App = () => {
  const { theme, themeLoaded, getFonts } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);
  const [showDialog, setShowDialog] = useState(false);
  const [newTheme, setNewTheme] = useState();

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

  const manageDialog = () => {
    setShowDialog(!showDialog);
  };

  const createTheme = (newTheme) => {
    setShowDialog(false);
    setNewTheme(newTheme);
  };
  return (
    <>
      {themeLoaded && (
        <ThemeProvider theme={selectedTheme}>
          <GlobalStyles />
          <Container style={{ fontFamily: selectedTheme.font }}>
            <h1>Card Builder</h1>
            <button className="btn" onClick={manageDialog}>
              Create a Theme
            </button>
            <Dialog
              header="Create a Theme"
              body={<CreateThemeContent create={createTheme} />}
              open={showDialog}
              callback={manageDialog}
            />
            <ThemeSelector setter={setSelectedTheme} newTheme={newTheme} />
            <Form />
          </Container>
        </ThemeProvider>
      )}
    </>
  );
};

export default App;
