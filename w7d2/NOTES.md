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

<button onClick={giveBeeAWin}>Give Bee a win</button>
    {/* or */}
<button onClick={() => giveAWin('MiniEmptyPit')}>Give Bee a win</button>