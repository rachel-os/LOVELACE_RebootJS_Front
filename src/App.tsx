import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { blue, yellow } from '@material-ui/core/colors';
import React from 'react';
import { Router } from 'react-router-dom';
import AppContent from './layout/AppContent';
import history from './history';


const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: yellow,
  },
})

function App() {
  return (
    // J'englobe mon app avec le Router.
    <Router history={history}>
      <ThemeProvider theme={theme}>
        <AppContent/>
      </ThemeProvider>
    </Router>
  );
}

export default App;
