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
          With this advisor you can fetch your top tracks <strong>select
           your favorite songs</strong> and then I will provide you some great recommendations for you to listen to.
          Go ahead and <a href='/auth/spotify'> Log into Spotify </a> and try it out yourself! Just make sure your spotify is connected to the right device. :)
        </Message.Body>
      </Message>
    )
  }
}

export default IntroContainer
