import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import ChatUI from '../conversations/components/ChatUI';
import MyProfile from '../profile/components/MyProfile';
import LoginScreen from '../login/components/LoginScreen';
import { HomeScreen } from './HomeScreen';
import { User } from '../users/types';

interface AppContentProps {
  users: User[];
  connectedUser?: User;
}

export default class AppContent extends Component<AppContentProps> {
  render() {
    return (
      <div>
        <Switch>
        <Route path='/conversation/:conversationId' component={() => <ChatUI users={this.props.users}/> } />
        <Route path='/profile' component={() => <MyProfile connectedUser={this.props.connectedUser} />} />
        <Route path="/login" component={LoginScreen} />
        <Route path="/" component={HomeScreen} />
      </Switch>
      </div>
    )
  }
}
