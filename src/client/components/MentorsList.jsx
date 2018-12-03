import React, { Component } from 'react'
import MentorsNameView from './MentorsNameView'

export default class MentorsList extends Component {
  render() {
    return (
      <ul className="MentorsList">
        {this.props.data.map(item => (
          <MentorsNameView
            firstName={item.first_name}
            lastName={item.last_name}
            slackNickname={item.slack_nickname}
            type={item.type}
            status={item.status}
            key={item.id}
          />
        ))}
      </ul>
    )
  }
}
