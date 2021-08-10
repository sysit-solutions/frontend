import React from 'react'
import Template from 'templates/default/detail'

class Content extends React.Component {
  render() {
    return (
      <Template style={{}}>
        <ul>
          <li>Course Content</li>
          <li>Video Recording</li>
          <li>Audio Production</li>
          <li>Voice Acting</li>
        </ul>
      </Template>
    )
  }
}

export default Content
