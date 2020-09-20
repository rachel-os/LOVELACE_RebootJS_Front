import { AppBar, Grid, IconButton, Toolbar, Typography } from '@material-ui/core';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import ContactsIcon from '@material-ui/icons/Contacts';
import Forum from '@material-ui/icons/Forum';
import React, { Component, Fragment } from 'react';
import { ProfileButton } from './ProfileButton';
import { IDrawerContent } from './types';

interface AppMenuProps {
  changeDrawerContent: (content: IDrawerContent) => void;
}

export default class AppMenu extends Component<AppMenuProps > {
  render() {
    const {changeDrawerContent} = this.props;
    return (
      <Fragment>
      <AppBar position="static" style={{ height: '10vh' }}>
        <Grid container justify="space-between" alignItems="center" style={{ height: '100%' }}>
          <Grid item>
            <Toolbar>
              <Forum fontSize="large" />
              <Typography variant="h3">flint</Typography>
            </Toolbar>
          </Grid>
          <Grid item>
            <Toolbar>
              <ProfileButton />
            </Toolbar>
          </Grid>
          <Grid item>
            <Toolbar>
            <IconButton color='default' onClick={() => changeDrawerContent('contacts')}><ContactsIcon fontSize="large"/></IconButton>
            <IconButton color='default' onClick={() => changeDrawerContent('conversations')}><ChatBubbleIcon fontSize="large"/></IconButton>
            </Toolbar>
          </Grid>
        </Grid>
      </AppBar>
    </Fragment>
    )
  }
}
