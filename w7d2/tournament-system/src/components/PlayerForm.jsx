import { useState } from 'react'

export default function PlayerForm(props) {
  const [formValues, setFormValues] = useState({
    wins: 0,
    gamerTag: "",
    name: ""
  })


  const handleGamerTagChange = event => {
    setFormValues({ ...formValues, gamerTag: event.target.value })
  }
  const handleNameChange = event => {
    setFormValues({ ...formValues, name: event.target.value })
  }

  return (
    <form>
      <input type="text" name="gamerTag" value={formValues.gamerTag} onChange={handleGamerTagChange} />
      <input type="text" name="name" value={formValues.name} onChange={handleNameChange} />
    </form>
  )
}