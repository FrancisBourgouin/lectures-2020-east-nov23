import logo from './logo.svg';
import './App.css';
import { useState, createContext } from 'react';
import MoleFarm from './components/MoleFarm';
import UserContext from './context/UserContext'
import DarkModeContext from './context/DarkModeContext'


function App() {
  const [user, setUser] = useState(undefined)
  const [darkMode, setDarkMode] = useState(false)
  return (
    <UserContext.Provider value={user}>
      <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
        <div className="App">
          <MoleFarm setUser={setUser} />
        </div>
      </DarkModeContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
