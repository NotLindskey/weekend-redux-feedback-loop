// import 
// import React from 'react'

import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Understanding = () => {
    const history = useHistory();

    const understanding = useSelector(store => store.understanding);
    const dispatch = useDispatch;
    
    const handleChange = () => {
        dispatch({type: 'SET_UNDERSTANDING', payload: event.target.value});
    }

    return (
    <div>
    <h1>understanding</h1>
    <p>How are you feeling today?</p>
    <input value={understanding} onChange={handleChange} type="number" min={0} max={5}/>
    <button onClick={() => history.push('/support')}>next</button>
    {/* <div>
        <input value={understanding} onChange={handleChange} className="input" type="text" />
        <button onClick={() => history.push('/understandingPage')} className="button">Next</button>
    </div> */}
    </div>
    )
}

export default Understanding;