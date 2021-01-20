import { useState } from 'react';



import './App.css';
import PlayerForm from './components/PlayerForm';
import PlayerList from './components/PlayerList';

function App() {

  const [players, setPlayers] = useState({
    "Final Chantasy": {
      gamerTag: "Final Chantasy",
      name: "Justin Chan",
      wins: 0
    },
    "MiniEmptyPit": {
      gamerTag: "MiniEmptyPit",
      name: "Bee Pisuthigomol",
      wins: 0
    },
    "evasiveburrito": {
      gamerTag: "evasiveburrito",
      name: "Luke Berzins",
      wins: 0
    },
    "ChefRob252": {
      gamerTag: "ChefRob252",
      name: "Robert Benett",
      wins: 0
    },
  })

  const giveAWin = (gamerTag) => {
    const playerInfo = { ...players[gamerTag] } // Creating a shallow copy of a specific player object
    playerInfo.wins += 1 // Sounds good
    const updatedPlayers = { ...players, [gamerTag]: playerInfo } // WTF?
    // players[gamerTag] = playerInfo
    setPlayers(updatedPlayers)
  }

  const giveAWinButBetter = (gamerTag) => {
    setPlayers(prevState => {
      const playerInfo = { ...prevState[gamerTag] }
      playerInfo.wins += 1
      const updatedPlayers = { ...prevState, [gamerTag]: playerInfo }

      return updatedPlayers
    })
  }

  const giveBeeAWin = () => giveAWin('MiniEmptyPit')

  const giveAWinToDuo = (gamerTag1, gamerTag2) => {
    giveAWinButBetter(gamerTag1)
    giveAWinButBetter(gamerTag2)

    // const playerInfo = { ...players[gamerTag1] } // Creating a shallow copy of a specific player object
    // playerInfo.wins += 1 // Sounds good
    // const updatedPlayers = { ...players, [gamerTag1]: playerInfo } // WTF?
    // // players[gamerTag] = playerInfo
    // setPlayers(updatedPlayers) // ASK FOR RERENDER

    // const playerInfo = { ...players[gamerTag2] } // Creating a shallow copy of a specific player object
    // playerInfo.wins += 1 // Sounds good
    // const updatedPlayers = { ...players, [gamerTag2]: playerInfo } // WTF?
    // // players[gamerTag] = playerInfo
    // setPlayers(updatedPlayers) // ASK FOR RERENDER
  }

  return (
    <div className="App">
      <h1>Super tournament management system</h1>
      <PlayerList players={players} />
      <button onClick={giveBeeAWin}>Give Bee a win</button>
      {/* or */}
      <button onClick={() => giveAWin('MiniEmptyPit')}>Give Bee a win</button>
      <button onClick={() => giveAWinToDuo("Final Chantasy", "evasiveburrito")}>Give Justin & Luke a win</button>
      <PlayerForm />
    </div>
  );
}

export default App;
