import React, { Component, Fragment } from 'react';
import { match, withRouter } from 'react-router-dom';
import { getConversations } from '../../api/methods';
import AttendeesList from './AttendeesList';
import { User } from '../../users/types';
import { IConversation } from '../types';
import ChatInput from './ChatInput';
import ChatMessages from './ChatMessages';

interface ChatUIState {
  conversation?: IConversation;
}

interface ChatUIProps {
  match: match<{ conversationId: string }>;
  // location correspond à là où je me trouve actuellement.
  location: any;
  // history correspond à l'historique de navigation.
  history: any;
  users: User[];
}

// Le composant ChatUI contient ChatMessages, qui contient lui-même ChatMessage

class ChatUI extends Component<ChatUIProps, ChatUIState> {
  constructor(props: ChatUIProps) {
    super(props);
    this.state = {};
  }

  // temporaire pour avoir une conversation dans le state.
  // TO DO : éviter de faire plusieurs appels => remonter l'appel dans la hierarchie de composants.

  componentDidMount() {
    getConversations()
      .then(conversations => {
        const conversation = conversations.find(conv => conv._id === this.props.match.params.conversationId)
        this.setState({ conversation: conversation })
    })
  }

  render() {
    return (
      <Fragment>
        <h2>chit-chat</h2>
        {/* soit je renvoie la conversation, soit je renvoie une erreur. */}
        { this.state.conversation ? 
        <Fragment>
          <ChatMessages messages={this.state.conversation.messages} />
          <ChatInput conversationId={this.state.conversation._id} />
          <AttendeesList attendees={this.props.users.filter(user => this.state.conversation?.targets.includes(user._id))} />
        </Fragment> : <h3>Yikes! Conversation not found.</h3>}
      </Fragment>
    )
  }
}

export default withRouter(ChatUI);
