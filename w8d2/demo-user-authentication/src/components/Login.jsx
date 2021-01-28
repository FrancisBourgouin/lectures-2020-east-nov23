import axios from 'axios'
import { useState } from 'react'

export default function Login(props) {
  const [loggedIn, setLoggedIn] = useState(false)

  const login = () => {
    axios.post("/api/login").then(res => {
      setLoggedIn(true)
      props.setUser(res.data)
    })
  }

  const logout = () => {
    axios.post("/api/logout").then(res => {
      setLoggedIn(false)
      props.setUser(null)
    })
  }
  return (
    <section>
      <h1>Login</h1>
      {!loggedIn && <button onClick={login}>Login</button>}
      {loggedIn && <button onClick={logout}>Logout</button>}
    </section>
  )
}