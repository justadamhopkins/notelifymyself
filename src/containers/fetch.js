import React, { Component } from 'react'


class Fetch extends Component {
  componentDidMount() {
    const data = {
      title: 'adam',
      subtitle: 'test',
      image: 'animal',
      para: 'test'
    }
    fetch(process.env.baseUrl + '/addCard', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
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
