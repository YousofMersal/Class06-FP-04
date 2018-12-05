import React, { Component } from 'react'
import { updateMentor } from '../apiCalls'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import 'react-day-picker/lib/style.css'
import moment from 'moment'
import MomentLocaleUtils, { formatDate, parseDate } from 'react-day-picker/moment'
import 'moment/locale/en-gb'

export default class EditMentorform extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bDaySelectedDay: this.props.editData.bday
        ? moment(this.props.editData.bday).format('DD-MM-YYYY')
        : undefined,
      isEmpty: true,
      isDisabled: false,
      admissionSelectedDay: this.props.editData.admission_date
        ? moment(this.props.editData.admission_date).format('DD-MM-YYYY')
        : undefined,
      admissionIsEmpty: true,
      admissionIsDisabled: false,
      locale: 'en-gb',
      fName: this.props.editData.first_name,
      lName: this.props.editData.last_name,
      slackName: this.props.editData.slack_nickname,
      memberType: this.props.editData.type,
      status: this.props.editData.status
    }
    console.log(this.props.editData)
  }

  handleClick = () => {
    setTimeout(() => {
      this.props.update()
      this.props.toggle()
    }, 100)
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
        this.state.bDaySelectedDay === undefined ? null : this.state.bDaySelectedDay,
      slackName: this.state.slackName,
      memberType: this.state.memberType,
      admission_date:
        this.state.admissionSelectedDay === undefined
          ? null
          : this.state.admissionSelectedDay,
      status: this.state.status
    }

    if (
      this.state.fName &&
      this.state.lName &&
      this.state.slackName &&
      this.state.memberType
    ) {
      updateMentor(formData)
      this.setState({
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
      })
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
            value={this.state.fName}
            onChange={this.handleInput}
          />
          <input
            placeholder="Last Name"
            type="text"
            name="lName"
            value={this.state.lName}
            onChange={this.handleInput}
          />
          <input
            placeholder="Member Type"
            type="text"
            name="memberType"
            value={this.state.memberType}
            onChange={this.handleInput}
          />
          <input
            placeholder="GitHub Link Name"
            type="url"
            name="slackName"
            value={this.state.slackName}
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
          <button
            type="submit"
            value="Create Member!"
            onClick={() => this.handleClick()}>
            Update
          </button>
        </form>
      </div>
    )
  }
}
