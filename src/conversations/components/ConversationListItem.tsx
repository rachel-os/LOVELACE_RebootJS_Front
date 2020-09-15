import { ListItemText } from '@material-ui/core';
import React, { Component } from 'react';
import { IConversation } from '../types';

// Une fois la conversation initialisée, on ne la change plus donc : props.
interface ConversationListItemProps {
  conversation: IConversation;
}

export default class ConversationListItem extends Component<ConversationListItemProps> {
  render() {
    return (
      <ListItemText>
        <h3>{this.props.conversation.targets.join(', ')}</h3>
        <h3>{this.props.conversation.messages[0].content}</h3>
        <h3>{this.props.conversation.updatedAt.toLocaleString()}</h3>
      </ListItemText>
    )
  }
}
