import { TextField, Button } from '@material-ui/core';
import React, { Component } from 'react';
import history from '../../history';
import { login } from '../../api/methods';
import { IFormField, defaultFormField } from '../../utils/types';


interface LoginFormState {
  email: IFormField,
  password: IFormField,
}

// S'il existe déjà des valeurs initiales sur mon profil, alors props pour les faire apparaître au premier chargement de la page. 
// Le state permet de rajouter des valeurs, qui vont pouvoir évoluer dans le temps.

export default class LoginForm extends Component<{}, LoginFormState> {
  constructor(props: {}){
    super(props)
    this.state = {
      email: defaultFormField(),
      password: defaultFormField()
    }
    this.submit = this.submit.bind(this)
    // équivaut à définir submit en arrow function : submit = () => {}
  }

  submit() {
    login(this.state.email.value, this.state.password.value)
      .then((_profile) => history.push('/profiles'));
  }

  render() {
    return (
      <form onSubmit={(event) => { event.preventDefault(); this.submit() }}>
        {/* event.preventDefault : j'empêche son comportement par défaut et je lui demande autre chose, en l'occurence de submit */}

      <TextField
        label="Email"
        value={this.state.email.value}
        required={true}
        
        //je récupère tout ce qui existe dans le state et ensuite l'email 
        onChange={(event) => this.setState({
          ...this.state,
          email: {value: event.target.value, isValid: true}
            // event = changements sur le field - target = le field - value = le contenu du field
        })}
      />
      <TextField
        type="password"
        label="Password"
        required={true}
        value={this.state.password.value}
        onChange={(event) => this.setState({
          ...this.state,
          password: {value: event.target.value, isValid: true}
        })}
      />
      <Button
        color="primary"
        variant="outlined"
        type="submit"
      >
        Submit
      </Button>
    </form>
    )
  }
}
