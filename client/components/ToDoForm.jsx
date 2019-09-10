import React from 'react';
import inputState from '../hooks/inputState'
import {TextField, Paper, Button} from '@material-ui/core'
const ToDoForm = ({addTodo}) => {
    const [value, handleChange, reset] = inputState("");

    return (
        <Paper>
            <form onSubmit={e => {
                e.preventDefault();
                addTodo(value);
                reset();
                }}>
            <TextField value={value} onChange={handleChange}/>
            </form>
        </Paper>
    )
}
export default ToDoForm