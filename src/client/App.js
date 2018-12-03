import React, { Component } from 'react'
import { GetJsonFromApi } from './apiCalls'
import MentorsList from './MentorsList'

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
  }

  render() {
    return (
      <div>
        <MentorsList data={this.state.mentors} />
      </div>
    )
  }
}
