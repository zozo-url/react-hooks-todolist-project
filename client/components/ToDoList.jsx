import React from 'react';
import {Paper, List, Divider, ListItem, ListItemText} from '@material-ui/core'

const ToDoList = (props) => {
return (
    <Paper>
        <List>
        {props.todos.map((todo, key) => (
            <div key={key}>
            <ListItem>
           <ListItemText>{todo.task}</ListItemText>
            </ListItem>
            <Divider/>
            </div>
        ))}            
        </List>

    </Paper>
)
}

export default ToDoList;