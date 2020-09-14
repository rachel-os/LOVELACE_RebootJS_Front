import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import React from 'react';
import { Router } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import history from './history';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FFC23C",
      contrastText: "white"
      },
      secondary: {
        main: "#FF5760",
        contrastText: "white"
      }
  },
})

function App() {
  return (
    // J'englobe mon app avec le Router.
    <Router history={history}>
      <ThemeProvider theme={theme}>
        <AppLayout />
      </ThemeProvider>
    </Router>
  );
}

export default App;
