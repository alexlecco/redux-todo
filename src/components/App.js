import React from 'react';
import '../App.css';
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Footer from './Footer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </header>
    </div>
  );
}

export default App;
