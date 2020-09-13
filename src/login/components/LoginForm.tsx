import { Box, Button, Container, Grid,TextField  } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import React, { Component } from 'react';
import history from '../../history';
import { login } from '../../api/methods';
import { IFormField, defaultFormField } from '../../utils/types';
import { validateRequiredField } from '../../utils/validateRequiredField';

interface LoginFormState {
  email: IFormField,
  password: IFormField,
  status: 'ready' | 'success' | 'error'
}

// S'il existe déjà des valeurs initiales sur mon profil, alors props pour les faire apparaître au premier chargement de la page. 
// Le state permet de rajouter des valeurs, qui vont pouvoir évoluer dans le temps.

export default class LoginForm extends Component<{}, LoginFormState> {
  constructor(props: {}){
    super(props)
    this.state = {
      email: defaultFormField(),
      password: defaultFormField(),
      status: 'ready'
    }
    this.submit = this.submit.bind(this)
    // équivaut à définir submit en arrow function : submit = () => {}
  }

  submit() {
    login(this.state.email.value, this.state.password.value)
      .then((_profile) => {
        history.push('/')
        // this.setState({status: 'success'})
      })
      .catch(_error => { this.setState({status: 'error'})});
    }

  render() {
    const { email, password, status } = this.state;
    return (
      <Container maxWidth='xs'>
          <form onSubmit={(event) => { event.preventDefault(); this.submit() }}>
            {/* event.preventDefault : j'empêche son comportement par défaut et je lui demande autre chose, en l'occurence de submit */}
            
            {/* en fonction du status, je définis un message à renvoyer à l'utilisateur. */}
            {status !== 'ready' ?
              <Alert severity={status}>
                {status === 'success' ? 'User is logged in.' : 'User does not exist.'}
              </Alert> : null }
            <Box style={{ margin: '2rem 0'}}>
              <TextField
                label="Email"
                value={email.value}
                required={true}  
                //je récupère tout ce qui existe dans le state et ensuite l'email 
                onChange={(event) => this.setState({
                  email: {value: event.target.value, isValid: validateRequiredField(event.target.value)}
                    // event = changements sur le field - target = le field - value = le contenu du field
                })}
                fullWidth={true}
                style={{margin: '1rem 0'}}
                variant="outlined"
                {...( email.isValid ? {} : { error: true, helperText: 'This field is required.' })}
              />
            <TextField
              type="password"
              label="Password"
              required={true}
              value={password.value}
              onChange={(event) => this.setState({
                ...this.state,
                password: {value: event.target.value, isValid: validateRequiredField(event.target.value)}
              })}
              fullWidth={true}
              variant="outlined"
              {...( password.isValid ? {} : { error: true, helperText: 'This field is required.' })}

            />
          </Box>
          <Box style={{margin: '1rem 0'}}>
            <Grid container justify='flex-end'>
              <Grid item xs>
                <Button
                  color="primary"
                  variant="outlined"
                  type="submit"
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Box>
        </form>
      </Container>
    )}
}
