import React, { Component } from 'react';
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

  componentDidMount(){
    getUsers().then(fetchedUsers => { this.setState({users: fetchedUsers})})
  }

  render() {
    return (
      <div>
        <h1>Liste de contact</h1>
        <ul>
        {this.state.users.map((user) => 
          <li>
            <ContactListItem firstname={user.firstname} lastname={user.lastname}/>
          </li>
        )}
      </ul>
      </div>
    )
  }
}
