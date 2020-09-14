import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import ContactList from '../users/components/ContactList';
import MyProfile from '../profile/components/MyProfile';
import LoginScreen from '../login/components/LoginScreen';

export default class AppContent extends Component {
  render() {
    return (
      <div>
        {/* Je crée mes routes pour la home et page de login */}
        <Switch>
        <Route path='/profile' component={MyProfile}/>
        <Route path="/login" component={LoginScreen} />
          <Route path="/" component={ ContactList } />
      </Switch>
      </div>
    )
  }
}
