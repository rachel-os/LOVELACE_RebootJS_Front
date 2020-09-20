import { Fab, TextField } from '@material-ui/core';
import { Send } from '@material-ui/icons';
import React, { Component } from 'react';

interface IChatInputState {
  message: string;
}

interface IChatInputProps {
  conversationId: string;
}

// Ce composant porte la responsabilité d'envoyer les messages.
export default class ChatInput extends Component<IChatInputProps, IChatInputState> {
  constructor(props: IChatInputProps){
    super(props);
    this.state = {
      message: ''
    }
  }

  sendMessage = () => {
    console.log(`This message ${this.state.message} is going to be sent to conversation n# ${this.props.conversationId}`);
  }
  
  updateMessage = (newValue: string) => {
    this.setState({message: newValue});
  }
  render() {
    return (
      <form onSubmit={(event) => {
        event.preventDefault();
        this.sendMessage();
      }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ flexGrow: 1 }}>
            <TextField
              fullWidth={true}
              value={this.state.message}
              onChange={(event) => this.updateMessage(event.target.value)}
              variant="filled"
            />
          </div>
          <div
            style={{
              flexGrow: 0,
              display: 'flex',
              width: '150px',
              justifyContent: 'space-around',
            }}
          >
            <Fab type="submit" color="primary" aria-label="send">
              <Send fontSize="large" />
            </Fab>
          </div>
        </div>
      </form>
    )
  }
}
