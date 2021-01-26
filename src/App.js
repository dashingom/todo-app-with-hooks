import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import List from "@material-ui/core/List";
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";

const App = () => {
  const [todos, setTodos] = useState([
    { text: "Learn about react", isCompleted: true, id: uuidv4() },
    { text: "Buy Car", isCompleted: false, id: uuidv4() },
    { text: "Meet friend for dinner", isCompleted: true, id: uuidv4() },
  ]);

  const addTodo = (text) => {
    let newTodos = [...todos, { text, isCompleted: false, id: uuidv4() }];
    setTodos(newTodos);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Todo App
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md">
        <AddTodo addTodo={addTodo} />
        <List>
          {todos.length ? (
            todos.map((todo) => (
              <Todo key={todo.id} todo={todo} handleDelete={handleDelete} />
            ))
          ) : (
            <p>No Todos</p>
          )}
        </List>
      </Container>
    </React.Fragment>
  );
};

export default App;
