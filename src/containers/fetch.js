import React, { Component } from 'react'


class Fetch extends Component {
  componentDidMount() {
    fetch(process.env.baseUrl)
      .then((response) => {
        response.json()
          .then(helloRes => {
            console.log(helloRes)
          })
      }).catch((err) => {
        console.log(err, 'err')
      })
  }

  render() {
    return (
      <div>
        <h1>FETCH</h1>
      </div>
    )
  }
}

export default Fetch
