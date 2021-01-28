import React from 'react'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      owner: "",
      repoName: ""
    }
    // this.handleChange = this.handleChange.bind(this)
  }

  handleChange = event => {
    const { name, value } = event.target

    this.setState({ ...this.state, [name]: value })
  }

  handleSubmit = event => {
    event.preventDefault()
    const { owner, repoName } = this.state
    this.props.updateRepoInfo(owner, repoName)
  }

  render() {
    const { handleChange, handleSubmit } = this

    return (
      <form onSubmit={handleSubmit}>
        <input name="owner" onChange={handleChange} />
        <input name="repoName" onChange={handleChange} />
        <button type="submit">Submit!</button>
      </form>
    )
  }
}

export default Form