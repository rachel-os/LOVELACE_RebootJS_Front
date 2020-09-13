import React, { Component, ReactNode } from 'react'

interface LoginTabPanelProps {
  index: number;
  valueTab: number;
  children: ReactNode;
}

export default class LoginTabPanel extends Component<LoginTabPanelProps> {
  render() {
    // Renvoie mon children seulement si la valeur du tab est égale à l'index. 
    // Si c'est bien le cas, alors montre l'intérieur de mon composant. Sinon il reste caché.
    const hidden = this.props.valueTab !== this.props.index;

    return (
      <div hidden={hidden}>
        {this.props.children}
      </div>
    )
  }
}
