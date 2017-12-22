import React, { PureComponent, PropTypes } from 'react'
import { Nav, Level, Hero, SubTitle } from 'reactbulma'
import { connect } from 'react-redux'
import fetchUser from '../actions/user/fetch'

class NavBar extends PureComponent {

  componentDidMount() {
    this.props.fetchUser()
  }

  classNames() {
    let classes = 'Sign in with Spotify'

    if (this.props.user[0]) { classes = 'Signed in' }

    return classes
  }

  render() {
    const { signedIn } = true;
    const user = this.props.user[0]
    const { id } = { ...user }

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
            <a href='/auth/spotify?showDialog=true'> { this.classNames() } </a>
          </Level.Item>
        </Level.Right>
      </Level>
    )
  }
}

const mapStateToProps = ({ user }) => ({ user })

export default connect(mapStateToProps, {fetchUser})(NavBar)
