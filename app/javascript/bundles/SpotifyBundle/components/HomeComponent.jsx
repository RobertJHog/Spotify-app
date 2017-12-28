import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux'
import NavBar from './NavBar'
import IntroContainer from './IntroContainer'
import TopTracksContainer from './toptracks/TopTracksContainer'
import Recommendations from './recommendations/Recommendations'
import fetchUser from '../actions/user/fetch'
import './HomeComponent.scss'

class HomeComponent extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        isSignedIn: false
      }
  }

  static propTypes = {
    user: PropTypes.array.isRequired,
  }

  componentDidMount() {
    this.props.fetchUser()
  }

  componentDidUpdate() {
    if (this.props.user[0] && !this.state.isSignedIn) {
      this.setSignedIn()
    }
  }

  setSignedIn() {
    let user = this.props.user[0]
      if (user && !this.state.isSignedIn) {
        this.setState({
          isSignedIn: true
        })
      }
  }

  render() {
    const isSignedIn = this.state.isSignedIn
    const user = this.props.user[0]
    const { id } = { ...user }

    return (
      <div className="container react-app">
        <NavBar id={id} />
        <div className="container content">
          <IntroContainer/>
          <TopTracksContainer isSignedIn={isSignedIn}/>
          <Recommendations/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({ user })

export default connect(mapStateToProps, {fetchUser})(HomeComponent)
