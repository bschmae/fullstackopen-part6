import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { vote } from '../reducers/anecdoteReducer';

 const Anecdote = ({ anecdote }) => {
    const dispatch = useDispatch();

    return(
        <div>
            <div>
                {anecdote.content}
            </div>
            <div>
                has {anecdote.votes}
                <button onClick={() => dispatch(vote(anecdote.id))}>vote</button>
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