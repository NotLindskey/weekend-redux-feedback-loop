import React from 'react';
import { useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import understanding from '../Understanding/Understanding';

const results = () => {
    const history = useHistory();

    const feelings = useSelector(store => store.feelings);
    const understanding = useSelector(store => store.understanding);
    const support = useSelector(store => store.support);
    const comments = useSelector(store => store.comments);


    const handleClick = () =>   {
        alert('submission has been made!');
        history.push('/')
    }

    return (
    <div>
    <h1>Results</h1>
    <p><b>feelings</b>: {feelings}</p>
    <p><b>understanding</b>: {understanding}</p>
    <p><b>support</b>: {support}</p>
    <p><b>comments</b>: {comments}</p>
    <button onClick={handleClick}>submit</button>
    </div>
    )
}

export default results;