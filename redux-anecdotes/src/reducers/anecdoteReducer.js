import { createSlice } from '@reduxjs/toolkit';
import anecdoteService from '../services/anecdotes';

const getId = () => (100000 * Math.random()).toFixed(0);

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  };
};

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
     vote(state, action) {
      const changedAnecdote = action.payload;
      const { id } = action.payload;

      const newState = state.map(a => a.id !== id ? a : changedAnecdote);
      newState.sort((a, b) => b.votes - a.votes);
      return newState;
    },
    appendAnecdote(state, action) {
      state.push(action.payload);
    },
    setAnecdotes(state, action) {
      return action.payload;
    },
  },
})

export const { vote, appendAnecdote, setAnecdotes } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll();
    dispatch(setAnecdotes(anecdotes));
  };
};

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content);
    dispatch(appendAnecdote(newAnecdote));
  };
};

export const voteAnecdote = anecdote => {
  return async dispatch => {
    const votedAnecodte = await anecdoteService.update(anecdote);
    dispatch(vote(votedAnecodte));
  }
}

export default anecdoteSlice.reducer;