import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import PrivateComponent from './components/PrivateComponent';
import { useEffect, useState } from 'react';
import axios from 'axios'

function App() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    axios.post("/api/authenticate").then(res => setTimeout(() => setUser(res.data), 2000))
  }, [])

  return (
    <div className="App">
      {user && <h1>Hi {user.name}</h1>}
      <Login setUser={setUser} />
      <PrivateComponent />
    </div>
  );
}

export default App;
