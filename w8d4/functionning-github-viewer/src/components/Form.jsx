import { useState } from 'react'

export default function Form(props) {
  const [formData, setFormData] = useState({
    repoName: "",
    owner: ""
  })

  const handleSubmit = event => {
    event.preventDefault()
    props.setValuesFromForm(formData.owner, formData.repoName)
  }

  const handleChange = event => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="repoName" placeholder="Name of the repo" onChange={handleChange} />
      <input type="text" name="owner" placeholder="Owner of repo" onChange={handleChange} />
      <button type="submit">Submit!</button>
    </form>
  )
}