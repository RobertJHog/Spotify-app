import React, { PureComponent } from 'react'
import { Message } from 'reactbulma'

class IntroContainer extends PureComponent {
  render() {
    return (
      <Message>
        <Message.Header>
          <p>Spotify Advisor</p>
        </Message.Header>
        <Message.Body>
          Welcome! With this advisor you can fetch your top tracks <strong>select
           your favorite songs</strong> and then I will provide you some great recommendations
          <a href='/auth/spotify'> log into Spotify </a> and try it out yourself!
        </Message.Body>
      </Message>
    )
  }
}

export default IntroContainer
