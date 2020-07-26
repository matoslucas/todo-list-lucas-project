import React from 'react';

import NavbarComponent from './com/NavbarComponent';
import Container from '@material-ui/core/Container';
import TaskContextProvider from './contexts/TaskContext';
import TodoListComponent from './com/TodoListComponent';

function App() {

  return (
    <Container maxWidth="md">
      <TaskContextProvider>
        <NavbarComponent></NavbarComponent>
        <TodoListComponent></TodoListComponent>
      </TaskContextProvider>
    </Container>
  );
}

export default App;