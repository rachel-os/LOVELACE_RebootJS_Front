import { createStyles, Theme, withStyles } from '@material-ui/core';
import React, { Component, Fragment } from 'react';
import { getConnectedProfile, getUsers } from '../api/methods';
import { User } from '../users/types';
import AppContent from './AppContent';
import AppDrawer, { drawerWidth } from './AppDrawer';
import AppMenu from './AppMenu';
import { IDrawerContent } from './types';

interface AppLayoutProps {
  classes: any;
}

interface AppLayoutState {
  showDrawer: boolean;
  drawerContent?: IDrawerContent;
  users: User[];
  profile?: User;
}

// Pour avoir des classes dynamiques : je veux montrer les classes que je veux appliquer lorsqu'un utilisateur active et désactive le Drawer 
// Si j'ai showDrawer true alors je montre certaines classes (contentShift) 
// 1. Je complète un tableau avec des classes. 
// 2. Je "join" les classes qu'il me reste (l.41)  
// 3. Si le drawer est ouvert alors la classe 2 est filtré 
// 4. J'intègre une fonction dans l'enfant qui vient modifier le parent. 

const styles = (theme: Theme) => createStyles({
  content: {
    width: '100%',
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  contentShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawer: {
    width: drawerWidth
  }
})

class AppLayout extends Component<AppLayoutProps, AppLayoutState> {
  constructor(props: AppLayoutProps) {
    super(props);
    this.state = {
      showDrawer: false,
      users: []
    }
  }
  
  changeDrawerContent = (content: IDrawerContent) => {
    this.setState({ showDrawer: true, drawerContent: content });
  }
  
  hideDrawer = () => {
    this.setState({ showDrawer: false });
  }
  
  componentDidMount(){
    getUsers().then(fetchedUsers => { this.setState({users: fetchedUsers})})
    getConnectedProfile().then(profile => { this.setState({ profile }); })
  }
  
  render() {
    const { classes } = this.props;
    const filteredClasses = [classes.content, this.state.showDrawer && classes.contentShift].filter(Boolean).join(' ');
    return (
      <Fragment>
        <div className={filteredClasses}>
          <AppMenu changeDrawerContent={this.changeDrawerContent} />
          <AppContent connectedUser={this.state.profile} users={this.state.users}/>
        </div>
        <AppDrawer
          connectedUser={this.state.profile}
          users={this.state.users} 
          drawerContent={this.state.drawerContent}
          showDrawer={this.state.showDrawer}
          hideDrawer={this.hideDrawer}
          />
      </Fragment>
    )
  }
}

export default withStyles(styles)(AppLayout); 
