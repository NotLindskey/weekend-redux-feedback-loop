import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const results = () => {
    const history = useHistory();

    const results = useSelector(store => store.results);
    const dispatch = useDispatch();
    
    const handleChange = () => {
        dispatch({type: 'SET_RESULTS', payload: event.target.value});
    }

    return (
    <div>
    <h1>Results</h1>
    <p>Review Results</p>
    <input value={results} onChange={handleChange} type="number" min={0} max={5}/>
    <button>submit</button>
    {/* <div>
        <input value={results} onChange={handleChange} className="input" type="text" />
        <button onClick={() => history.push('/resultsPage')} className="button">Next</button>
    </div> */}
    </div>
    )
}

export default results;