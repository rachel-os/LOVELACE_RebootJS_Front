import { IFormPasswordField, IFormField } from '../../utils/types';
import React, { Component, Fragment } from 'react';
import { TextField } from '@material-ui/core';

interface CredentialsSectionProps {
  password: IFormPasswordField;
  confirmation: IFormField;
  changePassword: (value: string) => void;
  changeConfirmation: (value: string) => void;
}

export default class CredentialsSection extends Component<CredentialsSectionProps> {
  render() {
    const { password, confirmation, changePassword, changeConfirmation } = this.props;
    return (
      <Fragment>
        {/* React.Fragment permet de rassembler plusieurs autres composants en output; évite de mettre une div inutile. Equivalent à : <> et </> */}
        <TextField
          type="password"
          label="Password"
          value={password.value}
          required={true}
          onChange={(event) => changePassword(event.target.value)}
          fullWidth={true}
          variant="outlined"

          {...(password.isValid ? {} : { error: true, helperText: password.error })}
        />
        <TextField
          type="password"
          label="Confirmation"
          required={true}
          value={confirmation.value}
          onChange={(event) => changeConfirmation(event.target.value)}
          fullWidth={true}
          variant="outlined"
          style={{ margin: '0.5rem 0' }}


          {...(confirmation.isValid ? {} : { error: true, helperText: confirmation.error })}
        />
      </Fragment>
    )
  }
}
