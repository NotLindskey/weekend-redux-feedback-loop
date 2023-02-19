import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const comments = () => {
    const comments = useSelector(store => store.comments);
    const dispatch = useDispatch();
    const history = useHistory();
    
    const handleChange = () => {
        dispatch({type: 'SET_COMMENTS', payload: event.target.value});
    }

    return (
        <div>
            <h1>Comments</h1>
            <p>Any comments you want to leave?</p>
   
            <input value={comments} onChange={handleChange} type="text"/>
            <button onClick={() => history.push('/results')}>next</button>
        </div>
    )
}

export default comments;