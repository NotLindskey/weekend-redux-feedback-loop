import React from 'react';

function Home() {
    return (
        <div>
            <h1>Click "Start" to get started!</h1>
            <button onClick={console.log('start clicked!')}>
                Start
            </button>
        </div>
    )
} 

export default Home;