import { Tabs, Tab } from '@material-ui/core';
import React, { Component } from 'react';
import LoginTabPanel from './LoginTabPanel';


interface LoginScreenState {
  //Il s'agit de l'onglet sur lequel on se trouve actuellement.
  tab: number;
}
export default class LoginScreen extends Component<{}, LoginScreenState> {
  constructor(props: {}) {
    super(props);
    this.state = { tab: 0 }
  }
  render() {
    return (
      // TODO : remplacer la div l.18 par un container de Material UI
      <div>
        <Tabs
          indicatorColor='primary'
          textColor='primary'
          variant="fullWidth"
          value={this.state.tab}
          onChange={(_, newTab) => {
            this.setState({ tab: newTab })
          }}>
          <Tab label="login" />
          <Tab label="register" />
        </Tabs>

        <LoginTabPanel valueTab={this.state.tab} index={0}>
          <h1> Hello </h1>
        </LoginTabPanel>
        
        <LoginTabPanel valueTab={this.state.tab} index={1}>
          <h1> Coucou </h1>
        </LoginTabPanel>
      </div>
    )
  }
}
