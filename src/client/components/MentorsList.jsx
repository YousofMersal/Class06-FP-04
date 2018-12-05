import React, { Component } from 'react'
import MentorForm from './MentorForm'
import MentorsNameView from './MentorsNameView'
import { deleteMentor } from '../apiCalls'

export default class MentorsList extends Component {
  handleClick = () => {
    this.props.update()
  }

  render() {
    return (
      <ul className="MentorsList">
        <MentorForm update={this.props.update} />
        {this.props.data.map(item => {
          return (
            <div className="mentorview" key={item.id}>
              <MentorsNameView
                firstName={item.first_name}
                lastName={item.last_name}
                slackNickname={item.slack_nickname}
                type={item.type}
                status={item.status}
              />
              <button>Edit me!</button>
              <button
                onClick={() => {
                  deleteMentor(item.id)
                  this.handleClick()
                }}>
                Delete me!
              </button>
            </div>
          )
        })}
      </ul>
    )
  }
}
