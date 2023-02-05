import { HashRouter as Router, Route} from 'react-router-dom'

import Home from "../Home/Home";
import FeelingsPage from "../FeelingsPage/feelingsPage"

import React, { useEffect } from 'react';
// import axios from 'axios';
import './App.css';
import { useDispatch } from 'react-redux';

function App() {

  useEffect(() => {
    fetchFeelings();
  }, []);

  function fetchFeelings() {
    console.log('GET feelings')
  }

  const dispatch = useDispatch();

  return (
    <div className='App'>

      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1> 
        <h4>Don't forget about it!</h4>
      </header>

    <nav>
    <Router>
      <div>
        <Route>
          <Home />
        </Route>
        <Route exact path="/feelingsPage">
          <FeelingsPage />
        </Route>
        {/* <Route exact path="/understandingPage">
          <UnderstandingPage />
        </Route>
        <Route exact path="/supportedPage">
          <SupportedPage />
        </Route>
        <Route exact path="/CommentsPage">
           <CommentsPage />
        </Route>
        <Route exact path ="results">
          <Results />
        </Route> */}
      </div>
    </Router>
    </nav>
    </div>
  );
}

export default App;

// [] look into nav bar

// [] Home - Need to get starter page.
 
// [] components - pages //
// [] FeelingsPage - need a value
// [] UnderstandingPage - need a value
// [] SupportedPage - need a value
// [] Comments - can remain 

// [] admin page  

// [] results - need to gather all data from components. 
