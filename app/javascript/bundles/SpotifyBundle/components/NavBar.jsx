import React, { PureComponent, PropTypes } from 'react'
import { Nav } from 'reactbulma'
import { Level } from 'reactbulma'

class NavBar extends PureComponent {
    // static propTypes = {
    //   signedIn: PropTypes.bool.isRequired
    // }

  signOut () {
    AuthenticationClient.clearCookies(getApplication());
  }

  render() {
    const { signedIn } = true;

    return (
      <Level className="navbar">
        <Level.Left>
          <Level.Item> </Level.Item>
        </Level.Left>
        <Level.Right>
          <Level.Item>
            <a href='/auth/spotify'> 'Sign in with Spotify' </a>
          </Level.Item>
          <Level.Item>
            <a href='/auth/spotify' onClick={this.signOut.bind(this)}> 'Sign out' </a>
          </Level.Item>
        </Level.Right>
      </Level>
    )
  }
}

export default NavBar
