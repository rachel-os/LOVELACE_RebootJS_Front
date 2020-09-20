import { List } from '@material-ui/core';
import React, { Component } from 'react';
import ConversationListItem from './ConversationListItem';
import { IConversation } from '../types';
import { User } from '../../users/types';
import { getConversations } from '../../api/methods';

interface ConversationListProps {
  users: User[];
}
interface ConversationListState {
  conversations : IConversation[];
}

// On n'a pas de props mais un state
export default class ConversationList extends Component <ConversationListProps, ConversationListState> {
  constructor(props: ConversationListProps){
    super(props);
    this.state = {
      conversations: []
    }
  }
  
  componentDidMount(){
    getConversations()
    .then(conversations => this.setState({ conversations: conversations }))
    .catch(error => console.log(error));
  }

  render(){
    return (
      <List>
        {/* J'itère sur chaque élément et renvoie un objet qui contient toutes mes conversations sous forme de tableau grâce au map */}
        {this.state.conversations.map
          ((conversation, index) => 
           <ConversationListItem 
           users={this.props.users}
           conversation={conversation} 
           key={index}/>
          )}
      </List>
    )
  }
}
