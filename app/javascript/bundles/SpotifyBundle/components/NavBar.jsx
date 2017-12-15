import React, { PureComponent, PropTypes } from 'react'
import { Nav } from 'reactbulma'
import { Level } from 'reactbulma'

class NavBar extends PureComponent {
    // static propTypes = {
    //   signedIn: PropTypes.bool.isRequired
    // }

  render() {
    const { signedIn } = true;

    return (
      <Level className="navbar">
        <Level.Left>
          <Level.Item> <h1> by RjHog </h1> </Level.Item>
        </Level.Left>
        <Level.Right>
          <Level.Item>
            <a href='/auth/spotify'> {signedIn ? 'Sign out' : 'Sign in with Spotify'} </a>
          </Level.Item>
        </Level.Right>
      </Level>
    )
  }
}

export default NavBar
