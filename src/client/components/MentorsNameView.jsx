import React, { Component } from 'react'

export default class MentorsNameView extends Component {
  render() {
    return (
      <div className="mentorview">
        <p>
          {this.props.firstName} {this.props.lastName}{' '}
          <span>
            <a href={this.props.slackNickname}>Link to GitHub</a>
          </span>{' '}
          {this.props.type} {this.props.status}
        </p>
      </div>
    )
  }
}
