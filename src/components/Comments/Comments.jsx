import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const comments = () => {
    const history = useHistory();

    const comments = useSelector(store => store.comments);
    const dispatch = useDispatch();
    
    const handleChange = () => {
        dispatch({type: 'SET_COMMENTS', payload: event.target.value});
    }

    return (
    <div>
    <h1>Comments</h1>
    <p>Any comments you want to leave?</p>
    <input value={comments} onChange={handleChange} type="text"/>
    <button onClick={() => history.push('/results')}>next</button>
    {/* <div>
        <input value={comments} onChange={handleChange} className="input" type="text" />
        <button onClick={() => history.push('/commentsPage')} className="button">Next</button>
    </div> */}
    </div>
    )
}

export default comments;