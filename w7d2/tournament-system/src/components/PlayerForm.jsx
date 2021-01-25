import { useState } from 'react'

export default function PlayerForm() {
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

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormValues({ ...formValues, [name]: value })
  }

  return (
    <form>
      <input type="text" name="gamerTag" value={formValues.gamerTag} onChange={handleChange} />
      <input type="text" name="name" value={formValues.name} onChange={handleChange} />
    </form>
  )
}