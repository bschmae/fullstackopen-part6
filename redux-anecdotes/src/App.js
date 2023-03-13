import React from 'react';
import AnecdoteList from './components/AnecdoteList';
import AnecdoteForm from './components/AnecdoteForm';
import Filter from './components/Filter';
import Notification from './components/Notification';


const App = () => {
  return (
    <div>
      <Notification />
      <h2>Search anecdote</h2>
      <Filter />
      <h2>Anecdotes</h2>
      <AnecdoteList /> 
      <AnecdoteForm />
    </div>

  );
};

export default App;