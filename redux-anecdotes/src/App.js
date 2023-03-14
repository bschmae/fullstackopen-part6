import React from 'react';
import AnecdoteList from './components/AnecdoteList';
import AnecdoteForm from './components/AnecdoteForm';
import Filter from './components/Filter';
import Notification from './components/Notification';
import { useEffect } from 'react';
import anecdoteService from './services/anecdotes';
import { setAnecdotes } from './reducers/anecdoteReducer';
import { useDispatch } from 'react-redux';


const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    anecdoteService
    .getAll().then(anecdotes => dispatch(setAnecdotes(anecdotes)));
  }, []);
  
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