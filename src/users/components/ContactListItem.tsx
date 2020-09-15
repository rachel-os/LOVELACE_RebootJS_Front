import React, { Component } from 'react';
import { ListItemText } from '@material-ui/core';

//Je crée le contenu de la liste de contact en ne précisant que prénom et nom

interface ContactListItemProps {
  firstname: string;
  lastname: string;
}

export default class ContactListItem extends Component <ContactListItemProps>{
  render() {
    return (
      <ListItemText>
        {this.props.firstname} {this.props.lastname}
      </ListItemText>
    )
  }
}
