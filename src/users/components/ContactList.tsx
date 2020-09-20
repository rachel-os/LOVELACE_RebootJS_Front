import { List, ListItem, Button } from '@material-ui/core';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import FaceIcon from '@material-ui/icons/Face';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ContactListItem from './ContactListItem';
import { User } from '../types';

//TO DO : je peux afficher un loading en attendant que les users soient récupérés

interface ContactListProps {
  users: User[];
}
export default class ContactList extends Component<ContactListProps> {
  render() {
    return (
      <div>
        <h1>Contact List</h1>
        <List>
          {this.props.users.map((user, index) =>
            <ListItem key={index}>
              <ListItemIcon>
                <FaceIcon />
              </ListItemIcon>
              <ContactListItem firstname={user.firstname} lastname={user.lastname} />
            </ListItem>
          )}
        </List>

        <Button variant="outlined" color="primary">
          {/* Mon bouton renvoie désormais à la page de login */}
          <Link to="/login">Login</Link>
        </Button>
      </div>
    )
  }
}
