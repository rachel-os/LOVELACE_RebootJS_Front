import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'
import React, { Component } from 'react';
import { User } from '../../users/types';

interface IAttendeesListProps {
  attendees: User[];
}

// création d'une liste de participants

export default class AttendeesList extends Component<IAttendeesListProps> {
  render() {
    return (
      <List>
      {this.props.attendees.map((attendee, index) => <ListItem key={index}>
          <ListItemAvatar>
            <Avatar>{attendee.firstname[0]}</Avatar>
          </ListItemAvatar>
          <ListItemText>
            {attendee.firstname} {attendee.lastname}
          </ListItemText>
        </ListItem>)}
    </List>
    )
  }
}
