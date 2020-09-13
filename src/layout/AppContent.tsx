import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import ContactList from '../users/components/ContactList';
import LoginScreen from '../login/components/LoginScreen';

export default class AppContent extends Component {
  render() {
    return (
      <div>
        {/* Je crée mes routes pour la home et page de login */}
        <Switch>
          <Route path="/login"><LoginScreen /></Route>
          <Route path="/" component={ ContactList } />
      </Switch>
      </div>
    )
  }
}
