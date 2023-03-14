import React from 'react';
import AnecdoteList from './components/AnecdoteList';
import AnecdoteForm from './components/AnecdoteForm';
import Filter from './components/Filter';
import Notification from './components/Notification';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { initializeAnecdotes } from './reducers/anecdoteReducer';


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeAnecdotes());
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