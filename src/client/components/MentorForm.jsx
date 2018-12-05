import React, { Component } from 'react'
import { postNewMentor } from '../apiCalls'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import 'react-day-picker/lib/style.css'

export default class MentorForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fName: '',
      lName: '',
      slackName: '',
      bDay: '',
      type: '',
      admissionDate: '',
      status: 'Active'
    }
    this.handleAdmissionDay = this.handleAdmissionDay.bind(this)
    this.handleBday = this.handleBday.bind(this)
  }

  handleAdmissionDay(day) {
    if (day === undefined) {
      this.setState({ admissionDate: '' })
    } else {
      this.setState({ admissionDate: day.toLocaleDateString('da-DK') })
    }
  }

  handleBday(day) {
    if (day === undefined) {
      this.setState({ bday: '' })
    } else {
      this.setState({ bDay: day.toLocaleDateString('da-DK') })
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
      bDay: this.state.bDay,
      type: this.state.type,
      admissionDate: this.state.admissionDate,
      status: this.state.status
    }

    if (
      this.state.fName &&
      this.state.lName &&
      this.state.slackName &&
      this.state.type
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
          <label htmlFor="bday">Birthday (optional)</label>
          <DayPickerInput
            locale="dk"
            value={this.state.bDay}
            name="bday"
            onDayChange={day => this.handleBday(day)}
          />
          <input
            placeholder="type"
            type="text"
            name="Type"
            value={this.type}
            onChange={this.handleInput}
          />
          <input
            placeholder="GitHub Link Name"
            type="url"
            name="slackName"
            value={this.slackName}
            onChange={this.handleInput}
          />
          <label htmlFor="admissionDate">Admission Date (optional)</label>
          <DayPickerInput
            locale="dk"
            value={this.state.admissionDate}
            name="admissionDate"
            onDayChange={day => this.handleAdmissionDay(day)}
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
