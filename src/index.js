import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import registerServiceWorker from "./registerServiceWorker";

// introducing: redux-saga:
import createMiddleWareSaga from "redux-saga";
// End redux-saga.

// middleware:
const sagaMiddleware = createSagaMiddleware();
// End middleware.

// saga actions - watching:
function* watcherSaga() {}
// End saga actions.

// importing middleware

import logger from "redux-logger";
import createSagaMiddleware from "@redux-saga/core";

const feelingsPage = (state = [], action) => {
	console.log("inside feelings reducer!!!!!!!", state);
	if (action.type === "FEELINGS_PAGE") {
		console.log(action.payload);
		return action.payload;
	}
	return state;
};

const store = createStore(
	combineReducers({
		// home,
		feelingsPage,
	}),
	applyMiddleware(logger)
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
registerServiceWorker();
