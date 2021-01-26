import UserContext from '../context/UserContext'
import DarkModeContext from '../context/DarkModeContext'
import { useContext } from 'react'

export default function Mole(props) {
  const value = useContext(UserContext)
  const { darkMode, setDarkMode } = useContext(DarkModeContext)
  return (
    <section>
      <h1 onClick={() => props.setUser("Mole")}>I am Mole</h1>
      <h1>The current value in the state for user is: {value}</h1>
    </section>
  )
}