import React from 'react';
import AnecdoteList from './components/AnecdoteList';
import AnecdoteForm from './components/AnecdoteForm';
import Filter from './components/Filter';


const App = () => {
  return (
    <div>
      <h2>Search anecdote</h2>
      <Filter />
      <h2>Anecdotes</h2>
      <AnecdoteList /> 
      <AnecdoteForm />
    </div>

  );
};

export default App;