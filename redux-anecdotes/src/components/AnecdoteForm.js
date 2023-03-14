import React from 'react';
import { useDispatch } from 'react-redux';
import { createAnecdote } from '../reducers/anecdoteReducer';
import { setMessage } from '../reducers/notificationReducer';

const AnecdoteForm = () => {
    const dispatch = useDispatch();

    const addAnecdote = async (event) => {
        event.preventDefault();
        const content = event.target.anecdote.value;
        event.target.anecdote.value = '';
        dispatch(createAnecdote(content));
        dispatch(setMessage(`successfully created anecdote: '${content}'`))
        setTimeout(() => {
            dispatch(setMessage(null));
        }, 5000);
    };

    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={(event) => addAnecdote(event)}>
                <div><input name='anecdote' /></div>
                <button onClick={() => addAnecdote} type='submit'>create</button>
            </form>
        </div>
    );
};

export default AnecdoteForm;