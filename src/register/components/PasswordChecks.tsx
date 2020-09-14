import { Grid } from '@material-ui/core';
import { IFormPasswordField } from '../../utils/types';
import PasswordCheck from './PasswordCheck';
import React, { Component } from 'react';

interface PasswordChecksProps {
  password: IFormPasswordField;
}

export default class PasswordChecks extends Component<PasswordChecksProps> {
  render() {
    const { hasLower, hasUpper, hasNumber, hasSymbol, hasValidLength } = this.props.password;
    return (
      <Grid container direction="column" alignContent="flex-start" style={{ margin: '1rem 0' }}>
      <PasswordCheck check={hasLower} text="Your password must have a lowercase letter." />
      <PasswordCheck check={hasUpper} text="Your password must have an uppercase letter." />
      <PasswordCheck check={hasNumber} text="Your password must have a number." />
      <PasswordCheck check={hasSymbol} text="Your password must have a special character." />
      <PasswordCheck check={hasValidLength} text="Your password lenght must have be between 8 and 30 characters." />
    </Grid>
    )
  }
}
