import React, { Component } from 'react'
import EditMentorForm from './EditMentorForm'
import moment from 'moment'

export default class MentorsNameView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isEdit: false
    }
  }

  //Sets the isEdit key in state to the opposite of what it previously was.
  toggleEdit = () => {
    this.setState(prevState => ({
      isEdit: !prevState.isEdit
    }))
  }

  render() {
    //assigning a edit component to a variable to be able to easilier put it into a ternary operator.
    const editToggle = (
      <EditMentorForm
        id={this.props.id}
        editData={this.props.editData}
        update={this.props.update}
        toggle={this.toggleEdit}
      />
    )
    return (
      <div>
        <p>
          {this.props.firstName} {this.props.lastName}{' '}
          <span>
            <a href={this.props.slackNickname}>Link to GitHub</a>
          </span>{' '}
          {this.props.type} {this.props.status}
        </p>
        <p>
          {/* checks if data exsist and formats it if it does. If not it "renders" null */}
          {this.props.editData.bday
            ? moment(this.props.editData.bday).format('DD-MM-YYYY')
            : null}
        </p>
        <p>
          {this.props.editData.admission_date
            ? moment(this.props.editData.admission_date).format('DD-MM-YYYY')
            : null}
        </p>
        {/* checks if isEdit is true, if it is render the EditMentorForm if not render null,
         this does not unmount the component, rather it "renders" nothing. */}
        {this.state.isEdit ? editToggle : null}
        <button onClick={this.toggleEdit}>Edit me!</button>
      </div>
    )
  }
}
