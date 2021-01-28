import { useState, useEffect } from 'react'
import axios from 'axios'
import Form from './components/Form';
import Commit from './components/Commit';

import './App.css';

// Axios
// .get(`https://api.github.com/repos/FrancisBourgouin/${this.state.repoName}/commits`)
// .then(res => this.updateCommits(res.data))

function App() {
  const [owner, setOwner] = useState(null)
  const [repoName, setRepoName] = useState(null)
  const [repoData, setRepoData] = useState(null)

  const setValuesFromForm = (owner, repoName) => {
    setOwner(owner)
    setRepoName(repoName)
  }

  useEffect(() => {
    if (repoName && owner) {
      axios
        .get(`https://api.github.com/repos/${owner}/${repoName}/commits`)
        .then(res => setRepoData(res.data))
    }
  }, [owner, repoName])

  return (
    <div className="App">
      <h1>Github Viewer!</h1>
      <Form setValuesFromForm={setValuesFromForm} />
      <section>
        {repoData && repoData.map(commitData => <Commit key={commitData.sha} commitData={commitData} />)}
      </section>
    </div>
  );
}

export default App;
