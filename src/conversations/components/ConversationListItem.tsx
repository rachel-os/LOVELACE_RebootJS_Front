import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@material-ui/core';
import { AvatarGroup } from '@material-ui/lab';
import React, { Component, Fragment } from 'react';
import { IConversation } from '../types';
import { User } from '../../users/types';
import history from '../../history';

// Une fois la conversation initialisée, on ne la change plus donc : props.
interface ConversationListItemProps {
  conversation: IConversation;
  users: User[];
}

export default class ConversationListItem extends Component<ConversationListItemProps> {
  render() {
    const { conversation } = this.props;
    return (
      <div>
        <ListItem button onClick={() => history.push(`/conversation/${conversation._id}`)}>
        <List>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <AvatarGroup max={3}>
                {conversation.targets.map((target, index) =>
                  <Avatar key={index}>
                    {this.getUserFormList(target)?.firstname[0] || 'user unknown.'[0]}
                  </Avatar>)}
              </AvatarGroup>
            </ListItemAvatar>
            <ListItemText
              primary={conversation.messages[conversation.messages.length-1].content}
              secondary={
                <Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    color="textPrimary"
                  >
                    {conversation.targets.join(', ')}
                  </Typography>
                  <Typography>
                    {conversation.updatedAt.toLocaleString()}
                  </Typography>
                </Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </List>
        </ListItem>
      </div>
    )
  }
  getUserFormList = (id: string) => this.props.users.find(user => user._id === id)
}
