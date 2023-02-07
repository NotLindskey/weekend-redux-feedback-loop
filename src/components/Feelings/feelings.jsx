// import 
// import React from 'react'

import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Feelings = () => {
    const history = useHistory();

    const feelings = useSelector(store => store.feelings);
    const dispatch = useDispatch;
    
    const handleChange = () => {
        dispatch({type: 'SET_FEELINGS', payload: event.target.value});
    }

    return (
    <div>
    <h1>feelings</h1>
    <p>How are you feeling today?</p>
    <input value={feelings} onChange={handleChange} type="number" min={0} max={5}/>
    <button onClick={() => history.push('/understanding')}>next</button>
    {/* <div>
        <input value={feelings} onChange={handleChange} className="input" type="text" />
        <button onClick={() => history.push('/understandingPage')} className="button">Next</button>
    </div> */}
    </div>
    )
}

export default Feelings;