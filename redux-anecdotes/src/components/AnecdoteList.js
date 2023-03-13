import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { vote } from '../reducers/anecdoteReducer';
import { setMessage } from '../reducers/notificationReducer';

 const Anecdote = ({ anecdote }) => {
    const dispatch = useDispatch();

    const handleVote = (anecdote) => {
        dispatch(vote(anecdote.id));
        dispatch(setMessage(`you liked '${anecdote.content}'`));
        setTimeout(() => {
            dispatch(setMessage(null));
        }, 5000);
    }

    return(
        <div>
            <div>
                {anecdote.content}
            </div>
            <div>
                has {anecdote.votes}
                <button onClick={() => handleVote(anecdote)}>vote</button>
            </div>
        </div>
    );
 };

 const AnecdoteList = () => {
    const anecdotes = useSelector(({ filter, anecdotes }) => {
        if (filter === null) {
            return anecdotes;
        };
        const regex = new RegExp( filter, 'i');
        return anecdotes.filter(anecdote => anecdote.content.match(regex));
    });

    return (
        anecdotes.map(anecdote => 
            <Anecdote key={anecdote.id} anecdote={anecdote} /> )
    );
 };

 export default AnecdoteList;