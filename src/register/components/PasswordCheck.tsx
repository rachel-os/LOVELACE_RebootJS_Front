import { CheckCircleOutline, RadioButtonUnchecked } from '@material-ui/icons';
import { Grid, Typography } from '@material-ui/core';
import React, { Component } from 'react'

interface PasswordCheckProps {
  check: boolean;
  text: string;
}

export default class PasswordCheck extends Component<PasswordCheckProps> {
  render() {
    return (
      <Grid container item alignItems="center" style={{ fontSize: 'small' }}>
        { this.props.check ? 
          <CheckCircleOutline style={{ fontSize: 'inherit' }} /> : <RadioButtonUnchecked style={{ fontSize: 'inherit' }} />}
        <Typography style={{ marginLeft: '0.2rem', fontSize: 'inherit' }}>
          {this.props.text}
        </Typography>
      </Grid>
    )
  }
}
