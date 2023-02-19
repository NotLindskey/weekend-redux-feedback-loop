import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const understanding = () => {
    const understanding = useSelector(store => store.understanding);
    const dispatch = useDispatch();
    const history = useHistory();
    
    // record understanding input
    const handleChange = () => {
        dispatch({type: 'SET_UNDERSTANDING', payload: event.target.value});
    }

    return (
        <div>
            <h1>Understanding</h1>
            <p>How well are you understanding the content?</p>
    
            <input value={understanding} onChange={handleChange} type="text"/>

            {/* send to support question */}
            <button onClick={() => history.push('/support')}>next</button>
        </div>
    )
}

export default understanding;