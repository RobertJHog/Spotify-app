import React, { PureComponent, PropTypes } from 'react'
import { Nav, Level, Hero, SubTitle } from 'reactbulma'
import { connect } from 'react-redux'
import fetchUser from '../actions/user/fetch'
import './NavBar.scss'

class NavBar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    // if (this.state.signedIn) {
      this.props.fetchUser()
    // }
  }

  handleClick() {
    this.setState({signedIn: true})
  }

  classNames() {
    let classes = 'Sign in with Spotify'

    if (this.props.user[0]) { classes = 'Signed in' }

    return classes
  }

  render() {
    const { signedIn } = this.state.signedIn
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
            <a href='/auth/spotify' onClick={this.handleClick}> { this.classNames() } </a>
          </Level.Item>
        </Level.Right>
      </Level>
    )
  }
}

const mapStateToProps = ({ user }) => ({ user })

export default connect(mapStateToProps, {fetchUser})(NavBar)
