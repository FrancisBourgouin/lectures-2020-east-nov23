import React from 'react'
import axios from 'axios'

import Form from './components/Form'
import Commit from './components/Commit'
import Spy from './components/Spy'

import './App.css';

// Axios
// .get(`https://api.github.com/repos/FrancisBourgouin/${this.state.repoName}/commits`)
// .then(res => this.updateCommits(res.data))

class App extends React.Component {
  // State
  constructor() {
    super()

    this.state = {
      owner: null,
      repoName: null,
      repoData: null,
      caught: false
    }
  }
  // A way to handle the sideffect of an axios call

  updateRepoInfo = (owner, repoName) => {
    this.setState({ ...this.state, owner, repoName })
  }

  catch = () => {
    this.setState({ ...this.state, caught: true })
  }

  componentDidUpdate(prevProps, oldState) {
    if (oldState.owner === this.state.owner && oldState.repoName === this.state.repoName) {
      console.log('Nothing changed')
    } else {
      console.log('Something changed')
      axios
        .get(`https://api.github.com/repos/${this.state.owner}/${this.state.repoName}/commits`)
        .then(res => this.setState(prev => ({ ...prev, repoData: res.data })))
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Github Viewer</h1 >
        <Form updateRepoInfo={this.updateRepoInfo} />
        <section>
          {this.state.repoData && this.state.repoData.map(commitData => <Commit key={commitData.sha} commitData={commitData} />)}
        </section>
        {!this.state.caught && <Spy catch={this.catch} />}
      </div>
    )
  }
}

export default App;
