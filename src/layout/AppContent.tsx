import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import ChatUI from '../conversations/components/ChatUI';
import MyProfile from '../profile/components/MyProfile';
import LoginScreen from '../login/components/LoginScreen';
import { HomeScreen } from './HomeScreen';

export default class AppContent extends Component {
  render() {
    return (
      <div>
        <Switch>
        <Route path="/conversation" component={ ChatUI } />
        <Route path='/profile' component={MyProfile}/>
        <Route path="/login" component={LoginScreen} />
        <Route path="/" component={HomeScreen} />
      </Switch>
      </div>
    )
  }
}
