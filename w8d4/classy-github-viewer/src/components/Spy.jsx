import React from 'react'

class Spy extends React.Component {
  constructor(props) {
    super(props)
  }
  reportClick = (event) => {
    console.log('The target as clicked on something', event)
  }
  componentDidMount() {
    document.addEventListener('click', this.reportClick)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.reportClick)
  }

  render() {

    return (<h1 onClick={this.props.catch} style={{ fontSize: '6px' }}>I am spy</h1>)
  }
}

export default Spy