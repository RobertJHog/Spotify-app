import React, { PureComponent, PropTypes } from 'react'
import { Nav, Level, Hero, SubTitle } from 'reactbulma'
import { connect } from 'react-redux'
import fetchUser from '../actions/user/fetch'
import './NavBar.scss'

class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isSignedIn: this.props.isSignedIn
    }
  }

  componentDidMount() {
    this.props.fetchUser()
    console.log("fetched user?", this.props.user[0])
    setTimeout(() => {
      this.props.setLoggedIn(true)
      this.setState({
         isSignedIn: true
      })
    }, 500)
  }

  classNames() {
    let classes = 'Sign in with Spotify'

    if (this.props.user[0]) { classes = 'Signed in' }

    return classes
  }

  render() {
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
            <a href="/auth/spotify"> { this.classNames() } </a>
          </Level.Item>
        </Level.Right>
      </Level>
    )
  }
}

const mapStateToProps = ({ user }) => ({ user })

export default connect(mapStateToProps, {fetchUser})(NavBar)
