import { List, ListItem, Button } from '@material-ui/core';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import FaceIcon from '@material-ui/icons/Face';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ContactListItem from './ContactListItem';
import { User } from '../types';
import history from '../../history';

//TO DO : je peux afficher un loading en attendant que les users soient récupérés
interface ContactListProps {
  users: User[];
  connectedUser?: User;
}
export default class ContactList extends Component<ContactListProps> {
  createConversation(target: string){
    const {connectedUser} = this.props;
    if(connectedUser){
      const conversationId = this.generateConversationId(connectedUser._id, target);
      return history.push(`/conversation/${conversationId}`);
    }
  }
  render() {
    return (
      <div>
        <h1>Contact List</h1>
        <List>
          {this.props.users.map((user, index) =>
            <ListItem  button onClick={(_event) => { this.createConversation(user._id)}} key={index}>
              <ListItemIcon>
                <FaceIcon />
              </ListItemIcon>
              <ContactListItem firstname={user.firstname} lastname={user.lastname} />
            </ListItem>
          )}
        </List>

        <Button variant="outlined" color="primary">
          <Link to="/login">Login</Link>
        </Button>
      </div>
    )
  }

  generateConversationId = (userId: string, target: string) : string => {
    return Buffer.from([userId, target, new Date().toISOString()].join('_')).toString('base64');
  }
}
