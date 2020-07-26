import React, { useContext } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import CropFreeIcon from '@material-ui/icons/CropFree';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import LibraryAddCheckIcon from '@material-ui/icons/LibraryAddCheck';

import { TaskContext } from '../contexts/TaskContext';
import { Action } from '../reducers/TaskReducer';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.transparent,
    },
    marked: {
        textDecoration: 'line-through'
    }
}));


const TaskListComponent = () => {

    const {
        sortedTasks,
        dispatch,
    } = useContext(TaskContext)

    const classes = useStyles();

    const onChecked = (id, isChecked) => {
        dispatch({
            type: Action.CHECK_TASK,
            task: {
                id,
                isChecked
            }
        })
    }
    return (
        <List className={classes.root}>
            {sortedTasks.map((task) => {
                return (
                    <ListItem key={task.id}
                        role={undefined}
                        dense
                        button
                        onClick={() => {
                            onChecked(task.id, !task.isChecked)
                        }
                        }>
                        <IconButton color="primary">
                            {
                                !task.isChecked ? (<CropFreeIcon />) : (<LibraryAddCheckIcon />)
                            }
                        </IconButton>
                        <ListItemText primary={task.description}
                            className={task.isChecked ? classes.marked : ''} />
                        <ListItemSecondaryAction>
                            <IconButton
                                edge="end"
                                aria-label="comments"
                                onClick={() => {
                                    dispatch({
                                        type: Action.REMOVE_TASK,
                                        id: task.id
                                    })
                                }}>
                                <DeleteOutlineIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                );
            })}
        </List>
    );
}

export default TaskListComponent;