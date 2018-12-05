import React, { Component } from 'react'
import EditMentorForm from './EditMentorForm'

export default class MentorsNameView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isEdit: false
    }
  }

  toggleEdit = () => {
    this.setState(prevState => ({
      isEdit: !prevState.isEdit
    }))
  }

  render() {
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
        {this.state.isEdit ? editToggle : null}
        <button onClick={this.toggleEdit}>Edit me!</button>
      </div>
    )
  }
}
