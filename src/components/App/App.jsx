import { HashRouter as Router, Route} from 'react-router-dom'

import './App.css';

import Home from '../Home/Home'
import Header from '../Header/Header';
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
        <Route path="/">
          <Home  />
        </Route>
        <Route exact path="/feelings">
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

