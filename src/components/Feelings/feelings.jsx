import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const feelings = () => {
    const feelings = useSelector(store => store.feelings);
    const dispatch = useDispatch();
    const history = useHistory();
    
    // record feelings input
    const handleChange = (event) => {
        dispatch({type: 'SET_FEELINGS', payload: event.target.value});
    }

    return (
        <div>
            <h1>Feelings</h1>
            <p>How are you feeling today?</p>

            <input value={feelings} onChange={handleChange} type="text"/>

            {/* send to understanding question */}
            <button onClick={() => history.push('/understanding')}>next</button>
        </div>
    )
}

export default feelings;