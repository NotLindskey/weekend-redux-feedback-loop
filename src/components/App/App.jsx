import { HashRouter as Router, Route} from 'react-router-dom'

import './App.css';

import Header from '../Header/Header';
// import Home from "../Home/Home";
import Feelings from "../Feelings/feelings";
import Understanding from "../Understanding/Understanding";
import Support from "../Support/Support";
import Comments from "../Comments/Comments";
import Results from '../Results/Results';


function App() {

  return (
    <div className='App'>

    <Router>
      <Header />
      <br />
      <div>
        {/* <Route>
          <Home exact path="/" />
        </Route> */}
        <Route exact path="/">
          <Feelings />
        </Route>
        <Route exact path="/understanding">
          <Understanding />
        </Route>
        <Route exact path="/support">
          <Support />
        </Route>
        <Route exact path="/comments">
           <Comments />
        </Route>
        <Route exact path ="results">
          <Results />
        </Route>
      </div>
    </Router>
    
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
