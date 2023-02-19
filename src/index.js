import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

import logger from 'redux-logger';

// store feelings
const feelings = (state = '', action) => {
	if (action.type === 'SET_FEELINGS') {
		console.log(action.payload);
		return action.payload;
	}
	return state;
};

// store understanding
const understanding = (state = [], action) => {
	if (action.type === 'SET_UNDERSTANDING') {
		console.log(action.payload);
		return action.payload;
	}
	return state;
};

// store support
const support = (state = [], action) => {
	if (action.type === 'SET_SUPPORT') {
		console.log(action.payload);
		return action.payload;
	}
	return state;
};

// store comments
const comments = (state = [], action) => {
	if (action.type === 'SET_COMMENTS') {
		console.log(action.payload);
		return action.payload;
	}
	return state;
};

// const results = (state = [], action) => {
// 	return state;
// };

const store = createStore(
	combineReducers({
		feelings,
		understanding,
		support,
		comments,
	}),
	applyMiddleware(logger)
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
