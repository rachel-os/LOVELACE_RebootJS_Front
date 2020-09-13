import { TextField } from '@material-ui/core';
import React, { Component, Fragment } from 'react';
import { IFormField } from '../../utils/types';

interface IdentitySectionProps {
  email: IFormField;
  firstname: IFormField;
  lastname: IFormField;
  changeEmail: (value: string) => void;
  changeFirstname: (value: string) => void;
  changeLastname: (value: string) => void;
}
  // Avec changeEmail() je dis à l'enfant : tu sais comment changer l'email. 
  // C'est ensuite le parent qui remplit la fonction pour renvoyer la donnée à l'enfant. 

export default class IdentitySection extends Component <IdentitySectionProps> {
  render() {
    const { email, firstname, lastname, changeEmail, changeFirstname, changeLastname } = this.props;
    return (
<Fragment>
        <TextField
          label="Email"
          value={email.value}
          required={true}
          onChange={(event) => changeEmail(event.target.value)}
          fullWidth={true}
          variant="outlined"

          {...( email.isValid ? {} : { error: true, helperText: "Ce champ est obligatoire" })}
        />
        <TextField
          label="Firstname"
          required={true}
          value={firstname.value}
          onChange={(event) => changeFirstname(event.target.value)}
          fullWidth={true}
          variant="outlined"
          style={{margin: '0.5rem 0'}}

          {...( firstname.isValid ? {} : { error: true, helperText: "Ce champ est obligatoire" })}
        />
        <TextField
          label="Lastname"
          required={true}
          value={lastname.value}
          onChange={(event) => changeLastname(event.target.value)}
          fullWidth={true}
          variant="outlined"

          {...( lastname.isValid ? {} : { error: true, helperText: "Ce champ est obligatoire" })}
        />
      </Fragment>
    )
  }
}
