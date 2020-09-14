import CheckBoxIcon from '@material-ui/icons/CheckBox';
import ErrorIcon from '@material-ui/icons/Error';
import React, { Component, Fragment } from 'react';

interface ProfileFormCheckProps {
  check: boolean
}

export default class ProfileFormCheck extends Component<ProfileFormCheckProps>{
  render() {
    const text = "Unvalid email format."
    return (
      this.props.check ?
        <Fragment>
          <CheckBoxIcon />
          <span>{text}</span>
        </Fragment> :
        <Fragment>
          <ErrorIcon />
          <span>{text}</span>
        </Fragment>
    )
  }
}
