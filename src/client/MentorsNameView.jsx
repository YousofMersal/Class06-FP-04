import React, { Component } from 'react'

export default class MentorsNameView extends Component {
  render() {
    return (
      <div>
        <p>{this.props.firstName} </p>
        <p>{this.props.lastName} </p>
      </div>
    )
  }
}
