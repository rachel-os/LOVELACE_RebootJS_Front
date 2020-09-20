import React, { Component } from 'react';
import { IConversationMessage } from '../types';
import ChatMessage from './ChatMessage'

export interface IChatMessagesProps {
  messages: IConversationMessage[];
}

export default class ChatMessages extends Component<IChatMessagesProps> {
  //je lance la conversation depuis le composant parent "ChatUI" 
  public render() {
    return(
      // pour tous les messages dans les props
      this.props.messages.map((message, index) => <ChatMessage key={index} message={message} />)
    ) 
  }
}
