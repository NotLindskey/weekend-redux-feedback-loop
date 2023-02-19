import React from 'react' 
import { useHistory } from 'react-router-dom';

function home() {
    const history = useHistory();

    return(
        <div>
            <p>click "start" to get started!</p>
            <button onClick={() => history.push('/feelings')}>Start</button>
        </div>
    )
}

export default home;