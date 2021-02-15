import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './pages/Home/Home.js';
import Launches from './pages/Launches/Launches.js';
import Rockets from './pages/Rockets/Rockets.js';

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/launches">Launches</Link>
          </li>
          <li>
            <Link to="/rockets">Rockets</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/launches">
            <Launches />
          </Route>
          <Route path="/rockets">
            <Rockets />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
