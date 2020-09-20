import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@material-ui/core';
import { AvatarGroup } from '@material-ui/lab';
import React, { Component, Fragment } from 'react';
import { IConversation } from '../types';
import { User } from '../../users/types';
import { Link } from 'react-router-dom';

// Une fois la conversation initialisée, on ne la change plus donc : props.
interface ConversationListItemProps {
  conversation: IConversation;
  users: User[];
}

export default class ConversationListItem extends Component<ConversationListItemProps> {
  render() {
    return (
      <Link to={`/conversation/${this.props.conversation._id}`}>
        <List>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <AvatarGroup max={3}>
                {/* <Avatar alt="avatar" src="/static/images/avatar/1.jpg" /> */}
                {this.props.conversation.targets.map((target, index) =>
                  <Avatar key={index}>
                    {this.getUserFormList(target)?.firstname[0] || 'user unknown.'[0]}
                  </Avatar>)}
              </AvatarGroup>
            </ListItemAvatar>
            <ListItemText
              primary={this.props.conversation.messages[0].content}
              secondary={
                <Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    color="textPrimary"
                  >
                    {this.props.conversation.targets.join(', ')}
                  </Typography>
                  <Typography>
                    {this.props.conversation.updatedAt.toLocaleString()}
                  </Typography>
                </Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </List>
      </Link>
    )
  }
  getUserFormList = (id: string) => this.props.users.find(user => user._id === id)
}
