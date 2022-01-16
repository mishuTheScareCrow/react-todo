import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
