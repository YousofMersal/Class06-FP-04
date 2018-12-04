import React, { Component } from 'react'
import { postNewMentor } from '../apiCalls'

export default class MentorForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fName: '',
      lName: '',
      slackName: ''
    }
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = e => {
    e.preventDefault()

    const formData = {
      fName: this.state.fName,
      lName: this.state.lName,
      slackName: this.state.slackName
    }

    postNewMentor(formData)
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          placeholder="First Name"
          type="text"
          name="fName"
          value={this.fName}
          onChange={this.handleInput}
        />
        <input
          placeholder="Last Name"
          type="text"
          name="lName"
          value={this.lName}
          onChange={this.handleInput}
        />
        <input
          placeholder="GitHub Link Name"
          type="text"
          name="slackName"
          value={this.slackName}
          onChange={this.handleInput}
        />
        <input type="submit" value="Create Mentor!" />
      </form>
    )
  }
}
