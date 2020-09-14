import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import ContactsIcon from '@material-ui/icons/Contacts';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import Forum from '@material-ui/icons/Forum';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
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
            <button onClick={() => changeDrawerContent('contacts')}><ContactsIcon/></button>
            <button onClick={() => changeDrawerContent('conversations')}><ChatBubbleIcon/></button>
            </Toolbar>
          </Grid>
        </Grid>
      </AppBar>
    </Fragment>
    )
  }
}
