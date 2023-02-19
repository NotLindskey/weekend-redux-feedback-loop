import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const support = () => {
    const history = useHistory();

    const support = useSelector(store => store.support);
    const dispatch = useDispatch();
    
    const handleChange = () => {
        dispatch({type: 'SET_SUPPORT', payload: event.target.value});
    }

    return (
    <div>
    <h1>Support</h1>
    <p>How well are you being supported?</p>
    <input value={support} onChange={handleChange} type="text"/>
    <button onClick={() => history.push('/comments')}>next</button>
    {/* <div>
        <input value={understanding} onChange={handleChange} className="input" type="text" />
        <button onClick={() => history.push('/understandingPage')} className="button">Next</button>
    </div> */}
    </div>
    )
}

export default support;