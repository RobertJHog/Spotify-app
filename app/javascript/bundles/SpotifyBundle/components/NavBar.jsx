import React, { PureComponent, PropTypes } from 'react'
import { Nav, Level, Hero, SubTitle } from 'reactbulma'
import fetchUser from '../actions/user/fetch'
import './NavBar.scss'

class NavBar extends React.Component {

  classNames() {
    let classes = 'Sign in with Spotify'

    if (this.props.id) { classes = 'Signed in' }

    return classes
  }

  render() {
    const id = this.props.id

    return (
      <Level className="navbar">
        <Level.Left>
          <Level.Item>
            <Hero>
              <Hero.Body>
                <SubTitle> Welcome { id } </SubTitle>
               </Hero.Body>
             </Hero>
          </Level.Item>
        </Level.Left>
        <Level.Right>
          <Level.Item>
            <Hero>
              <Hero.Body>
                <a href="/auth/spotify"> { this.classNames() } </a>
              </Hero.Body>
            </Hero>
          </Level.Item>
        </Level.Right>
      </Level>
    )
  }
}

export default NavBar
