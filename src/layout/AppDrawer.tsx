import { Box, createStyles, Drawer, IconButton, Theme, withStyles } from '@material-ui/core';
import { ArrowBackIos } from '@material-ui/icons';
import React, { Component } from 'react';
import ContactList from '../users/components/ContactList';
import ConversationList from '../conversations/components/ConversationList';
import { IDrawerContent } from './types';
import { User } from '../users/types';

interface AppDrawerProps {
  showDrawer: boolean;
  //Je récupère les bonnes infos pour chaque type de contenu.
  drawerContent?: IDrawerContent;
  hideDrawer: () => void;
  classes: any;
  users: User[];
  connectedUser?: User;
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

class AppDrawer extends Component<AppDrawerProps>{
  render() {
    const { users } = this.props;
    const content = this.props.drawerContent === 'contacts' ? <ContactList connectedUser={this.props.connectedUser} users={users}/> : <ConversationList users={users}/>
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
