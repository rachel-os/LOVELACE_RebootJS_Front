import { Tabs, Tab } from '@material-ui/core';
import { Person, PersonAdd } from '@material-ui/icons';
import React, { Component } from 'react';
import LoginTabPanel from './LoginTabPanel';
import LoginForm from './LoginForm';
import RegistrationForm from '../../register/components/RegistrationForm';

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
          <Tab icon={<Person />} label="login" />
          <Tab icon={<PersonAdd />} label="register" />
        </Tabs>

        <LoginTabPanel valueTab={this.state.tab} index={0}>
          <LoginForm />
        </LoginTabPanel>
        
        <LoginTabPanel valueTab={this.state.tab} index={1}>
          <RegistrationForm />
        </LoginTabPanel>
      </div>
    )
  }
}
