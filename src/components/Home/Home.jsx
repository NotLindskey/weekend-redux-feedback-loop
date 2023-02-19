import React from 'react' 

function home() {

    return(
        <div>
            <p>click "start" to get started!</p>
            <button onClick={() => history.push('/feelings')}>Start</button>
        </div>
    )
}

export default home;