import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Login from './components/Login'
import Register from './components/Register'
import ShortURLInfo from './components/ShortURLInfo'
import ShortURLList from './components/ShortURLList'
import Urls from "./components/Urls";

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/login">Login</Link>
          <Link to="/">Home</Link>
          <Link to="/register">Register</Link>
          <Link to="/urls">Urls</Link>
        </nav>
        <Switch>
          <Route path="/" exact>
            <h1>WELCOME TO THE WORLD OF TOMORROWWWW</h1>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/urls">
            <Urls />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
