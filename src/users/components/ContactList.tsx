import { List, ListItem, Button } from '@material-ui/core';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import FaceIcon from '@material-ui/icons/Face';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ContactListItem from './ContactListItem';
import { getUsers } from '../../api/methods';
import { User } from '../types';

//1. Le composant est d'abord créé sans user.
//2. Après le component Did Mount, je fais mon axios.get pour récupérer les users 
//3. on va charger dans le back les données de l'utilisateur donc il s'agit d'un state qui contient les users
//TO DO : je peux afficher un loading en attendant que les users soient récupérés

interface ContactListState {
  users: User[];
}
export default class ContactList extends Component<{}, ContactListState> {
  constructor(props: {}){
    super(props)
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    getUsers().then(fetchedUsers => { this.setState({ users: fetchedUsers })})
  }

  render() {
    return (
      <div>
        <h1>Contact List</h1>
        <List>
          {this.state.users.map((user, index) =>
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
