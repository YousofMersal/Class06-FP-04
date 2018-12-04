import React, { Component } from 'react'
import MentorForm from './MentorForm'
import MentorsNameView from './MentorsNameView'

export default class MentorsList extends Component {
  render() {
    return (
      <ul className="MentorsList">
        <MentorForm />
        {this.props.data.map(item => (
          <div className="mentorview" key={item.id}>
            <MentorsNameView
              firstName={item.first_name}
              lastName={item.last_name}
              slackNickname={item.slack_nickname}
              type={item.type}
              status={item.status}
            />
            <button>Edit me!</button>
          </div>
        ))}
      </ul>
    )
  }
}
