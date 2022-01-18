import "./App.css";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Create from "./Create";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/create">
            <Create />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
