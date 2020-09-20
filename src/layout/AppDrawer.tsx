import { Box, createStyles, Drawer, IconButton, Theme, withStyles } from '@material-ui/core';
import { ArrowBackIos } from '@material-ui/icons';
import React, { Component } from 'react';
import ContactList from '../users/components/ContactList';
import ConversationList from '../conversations/components/ConversationList';
import { IDrawerContent } from './types';
import { getUsers } from '../api/methods';
import { User } from '../users/types';


interface AppDrawerProps {
  showDrawer: boolean;
  //Je récupère les bonnes infos pour chaque type de contenu.
  drawerContent?: IDrawerContent;
  hideDrawer: () => void;
  classes: any;
}

interface AppDrawerState {
  users: User[];
}

const styles = (theme: Theme) => createStyles({
  drawerHeader: {
    height: '50px',
    textAlign: 'right',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    backgroundColor: theme.palette.background.paper,
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  paper: {
    width: drawerWidth,
  },
  drawerContent: {
    height: 'calc(100% - 50px)',
  },
})

class AppDrawer extends Component<AppDrawerProps, AppDrawerState>{
  constructor(props: AppDrawerProps){
    super(props);
    this.state = {
      users: []
    }
  }

  componentDidMount(){
    getUsers().then(fetchedUsers => { this.setState({users: fetchedUsers})})
  }

  render() {
    const { users } = this.state;
    const content = this.props.drawerContent === 'contacts' ? <ContactList users={users}/> : <ConversationList users={users}/>
    return (
      this.props.showDrawer ?
      <Drawer
        variant="persistent"
        anchor="left"
        open={this.props.showDrawer}
        classes={{
          paper: this.props.classes.paper,
       }}>
        <Box className={this.props.classes.drawerHeader}>
          <IconButton aria-label="collapse" onClick={this.props.hideDrawer}>
            <ArrowBackIos />
          </IconButton>
        </Box>
        <Box className={this.props.classes.drawerContent}>
          {content}
        </Box>
      </Drawer> : null
    )
  }
}

export default withStyles(styles)(AppDrawer);
export const drawerWidth = 500; 