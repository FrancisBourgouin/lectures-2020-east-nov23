import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Login from './components/Login';
import MatchList from './components/MatchList';
import PlayerList from './components/PlayerList';
import Register from './components/Register';

import './App.css';
import Match from "./components/Match";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Router path="/matchs/:match:id">
            <Match />
          </Router>
          <Router path="/matchs">
            <MatchList />
          </Router>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
