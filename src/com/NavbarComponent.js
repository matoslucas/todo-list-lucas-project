import React, { useContext } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { TaskContext } from '../contexts/TaskContext';

const NavbarComponent = () => {
    const {tasks} = useContext(TaskContext)
    return (
        <AppBar position="static">
            <Toolbar variant="dense" 
                style={{ justifyContent: "center" }} >
                <Typography 
                    variant="h6" 
                    color="inherit">
                    React Todo List ({tasks.length})
                </Typography>
            </Toolbar>
        </AppBar>
    );
  }
  export default NavbarComponent;