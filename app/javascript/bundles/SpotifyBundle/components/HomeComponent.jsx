import PropTypes from 'prop-types';
import React from 'react';
import NavBar from './NavBar'
import IntroContainer from './IntroContainer'
import TopTracksContainer from './toptracks/TopTracksContainer'
import Recommendations from './recommendations/Recommendations'

class HomeComponent extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        isSignedIn: false
      }
      this.setLoggedIn = this.setLoggedIn.bind(this);
  }

  setLoggedIn(bool) {
     this.setState({
        isSignedIn: bool
     })
 }

  render() {
    const isSignedIn = this.state.isSignedIn

    return (
      <div className="container react-app">
        <NavBar isSignedIn={isSignedIn} setLoggedIn={this.setLoggedIn} />
        <div className="container content">
          <IntroContainer/>
          <TopTracksContainer isSignedIn={isSignedIn}/>
          <Recommendations/>
        </div>
      </div>
    );
  }
}

export default HomeComponent
