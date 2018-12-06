import React, { Component } from 'react'
import MentorForm from './MentorForm'
import MentorsNameView from './MentorsNameView'
import { deleteMentor } from '../apiCalls'

export default class MentorsList extends Component {
  handleClick = () => {
    setTimeout(() => {
      this.props.update()
    }, 100)
  }

  render() {
    return (
      <ul className="MentorsList">
        <MentorForm update={this.props.update} />
        {/* maps out however many entried into their own component with relevant data. */}
        {this.props.data.map((item, i) => {
          return (
            //key is set in the overall div rather than the component to make sure everything is handled as a group
            //as supposed to having non-key'd elements floating around. This could save performance in the long haul, or it could do nothing.
            <div className="mentorview" key={item.id}>
              <MentorsNameView
                id={item.id}
                update={this.props.update}
                firstName={item.first_name}
                lastName={item.last_name}
                slackNickname={item.slack_nickname}
                type={item.type}
                status={item.status}
                editData={this.props.mentors[i]}
              />
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
