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
            key={item.id}
          />
        ))}
      </ul>
    )
  }
}
