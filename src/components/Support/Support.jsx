import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const support = () => {
    const support = useSelector(store => store.support);
    const dispatch = useDispatch();
    const history = useHistory();
    
    // record support input
    const handleChange = () => {
        dispatch({type: 'SET_SUPPORT', payload: event.target.value});
    }

    return (
        <div>
            <h1>Support</h1>
             <p>How well are you being supported?</p>
            
            <input value={support} onChange={handleChange} type="text"/>

            {/* send to comments? */}
            <button onClick={() => history.push('/comments')}>next</button>
        </div>
    )
}

export default support;