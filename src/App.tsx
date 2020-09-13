import React from 'react';
import ContactList from './users/components/ContactList';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { blue, yellow } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: yellow,
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ContactList/>
    </ThemeProvider>
  );
}

export default App;
