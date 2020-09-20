import React, { Component } from 'react';
import { IConversationMessage } from '../types';


export interface IChatMessageProps {
  message: IConversationMessage;
}

export default class ChatMessage extends Component<IChatMessageProps> {
  public render() {
    return (
      <div>
        {this.props.message.content}
      </div>
    )
  }
}
