import React, { Component } from 'react'
import { postNewMentor } from '../apiCalls'

export default class MentorForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fName: '',
      lName: '',
      slackName: '',
      memberType: '',
      status: 'Active'
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
      slackName: this.state.slackName,
      memberType: this.state.memberType,
      status: this.state.status
    }

    if (
      this.state.fName &&
      this.state.lName &&
      this.state.slackName &&
      this.state.memberType
    ) {
      postNewMentor(formData)
    } else {
      alert('You need to fill the obligatory fields!')
    }
  }

  render() {
    return (
      <div>
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
            placeholder="Member Type"
            type="text"
            name="memberType"
            value={this.memberType}
            onChange={this.handleInput}
          />
          <input
            placeholder="GitHub Link Name"
            type="url"
            name="slackName"
            value={this.slackName}
            onChange={this.handleInput}
          />
          <label htmlFor="status">Status:</label>

          <select
            name="status"
            value={this.state.status}
            onChange={this.handleInput}>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
          <input type="submit" value="Create Member!" />
        </form>
      </div>
    )
  }
}
