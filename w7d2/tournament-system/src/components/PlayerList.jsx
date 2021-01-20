import PlayerListItem from "./PlayerListItem"

export default function PlayerList(props) {
  const playerArray = Object.values(props.players)

  const parsedPlayers = playerArray.map(player => <PlayerListItem key={player.gamerTag} {...player} />)
  return <ul>
    {parsedPlayers}
  </ul>
}