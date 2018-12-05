import React, { Component } from 'react'
import { postNewMentor } from '../apiCalls'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import 'react-day-picker/lib/style.css'
import moment from 'moment'
import MomentLocaleUtils, { formatDate, parseDate } from 'react-day-picker/moment'
import 'moment/locale/en-gb'

export default class MentorForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bDaySelectedDay: undefined,
      isEmpty: true,
      isDisabled: false,
      admissionSelectedDay: undefined,
      admissionIsEmpty: true,
      admissionIsDisabled: false,
      locale: 'en-gb',
      fName: '',
      lName: '',
      slackName: '',
      memberType: '',
      status: 'Active'
    }
  }

  handleClick = () => {
    setTimeout(() => {
      this.props.update()
    }, 50)
  }

  handlebDayChange = (bDaySelectedDay, modifiers, dayPickerInput) => {
    const input = dayPickerInput.getInput()
    this.setState({
      bDaySelectedDay,
      isEmpty: !input.value.trim(),
      isDisabled: modifiers.disabled === true
    })
  }

  handlebAdmissionDayChange = (admissionSelectedDay, modifiers, dayPickerInput) => {
    const input = dayPickerInput.getInput()
    this.setState({
      admissionSelectedDay,
      admissionIsEmpty: !input.value.trim(),
      admissionIsDisabled: modifiers.disabled === true
    })
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = e => {
    e.preventDefault()
    const formData = {
      fName: this.state.fName,
      lName: this.state.lName,
      bDay:
        this.state.bDaySelectedDay === undefined
          ? null
          : moment(
              this.state.bDaySelectedDay.toLocaleDateString('en-GB'),
              'DD-MM-YYYY'
            ).format('YYYY-MM-DD'),
      slackName: this.state.slackName,
      memberType: this.state.memberType,
      admission_date:
        this.state.admissionSelectedDay === undefined
          ? null
          : moment(
              this.state.admissionSelectedDay.toLocaleDateString('en-GB'),
              'DD-MM-YYYY'
            ).format('YYYY-MM-DD'),
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

          <label htmlFor="bDay">Birthday (optional) </label>
          <DayPickerInput
            formatDate={formatDate}
            parseDate={parseDate}
            placeholder={`${formatDate(new Date(), 'L', 'en-GB')}`}
            value={this.state.bDaySelectedDay}
            onDayChange={this.handlebDayChange}
            name="admission"
            localeUtils={MomentLocaleUtils}
            locale={this.state.locale}
            dayPickerProps={{
              locale: 'en-GB',
              selectedDays: this.state.bDaySelectedDay
            }}
          />
          <label htmlFor="admission">Admission date (optional) </label>
          <DayPickerInput
            formatDate={formatDate}
            parseDate={parseDate}
            placeholder={`${formatDate(new Date(), 'L', 'en-GB')}`}
            value={this.state.admissionSelectedDay}
            onDayChange={this.handlebAdmissionDayChange}
            name="admission"
            localeUtils={MomentLocaleUtils}
            locale={this.state.locale}
            dayPickerProps={{
              locale: 'en-GB',
              selectedDays: this.state.admissionSelectedDay
            }}
          />
          {/* <input
            type="submit"
            value="Create Member!"
            onClick={() => this.handleClick()}
          /> */}
          <button
            type="submit"
            value="Create Member!"
            onClick={() => this.handleClick()}>
            Delete me!
          </button>
        </form>
      </div>
    )
  }
}
