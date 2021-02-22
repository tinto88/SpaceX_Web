import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link,
} from "react-router-dom";

import Home from "./pages/Home/Home.js";
import Launches from "./pages/Launches/Launches.js";
import Rockets from "./pages/Rockets/Rockets.js";
import RocketDetail from "./pages/RocketDetail/RocketDetail.js";
import LaunchDetail from "./pages/LaunchDetail/LaunchDetail.js"
function App() {
  return (
    <Router>
      <div>
        <ul className="navbar">
          <div className="nav1">
            <Link to="/">SpaceX</Link>
          </div>

          <div className="nav2">
            <NavLink
              exact
              to="/"
              activeStyle={{
                fontWeight: "bold",
                color: "#ffaf01",
              }}
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              to="/rockets"
              activeStyle={{
                fontWeight: "bold",
                color: "#ffaf01",
              }}
            >
              <li>Rockets</li>
            </NavLink>
            <NavLink
              to="/launches"
              activeStyle={{
                fontWeight: "bold",
                color: "#ffaf01",
              }}
            >
              <li>Launches</li>
            </NavLink>
          </div>
        </ul>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/launches/detail/:launchId">
            <LaunchDetail />
          </Route>
          <Route path="/launches">
            <Launches />
          </Route>
          <Route exact path="/rockets">
            <Rockets />
          </Route>
          <Route exact path="/rockets/detail/:rocketId">
            <RocketDetail />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
