import React, { useState } from 'react'
import ToDoList from './ToDoList'
import ToDoForm from './ToDoForm'
import {Typography, Paper, AppBar, Toolbar, Grid} from "@material-ui/core"
const ToDoApp = () => {
    const initialToDos = [
        {id: 1, task: "thing", completed: false},
        {id: 2, task: "hang out", completed: true},
        {id: 3, task: 'something else', completed: false}
    ]
    const[todos, setTodos] = useState(initialToDos)
    const addTodo = newTodoText => {
        setTodos([...todos, {id: 4, task: newTodoText, completed: false} ])
    }
  return (
        <Paper
        style={{
            padding:0,
            margin:0,
            height:"100vh",
            backgroundColor: "#fafafa"
        }}
        elevation={0}
        >
            <AppBar color='primary' position= 'static' style={{height: '64px'}}>
                <Toolbar>
                    <Typography color='inherit'>TO DO</Typography>
                </Toolbar>
            </AppBar>
            <ToDoForm addTodo = {addTodo} />
            <ToDoList todos={todos}/>
        </Paper>
  )
}

export default ToDoApp
