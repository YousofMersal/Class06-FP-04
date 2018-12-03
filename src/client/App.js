import React, { Component } from 'react'
import { GetJsonFromApi } from './apiCalls'

export default class App extends Component {
  //adding mentors in state for displaying it later
  constructor(props) {
    super(props)
    this.state = {
      mentors: []
    }
  }

  //fetch request to express backend
  componentDidMount() {
    GetJsonFromApi().then(res => this.setState({ mentors: res }))
    // fetch('/api/mentors')
    //   .then(res => {
    //     if (res.status !== 200) {
    //       throw Error(res.statusText)
    //     }
    //     return res.json()
    //   })
    //   .then(res => console.log(res))
    //   .catch(err => {
    //     console.log(`Oh no! Fetch method got caught! error: \n \n ${err}`)
    //   })
  }

  render() {
    return <h1>Test</h1>
  }
}
