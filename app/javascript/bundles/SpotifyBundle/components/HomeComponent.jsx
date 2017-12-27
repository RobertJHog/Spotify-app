import PropTypes from 'prop-types';
import React from 'react';
import NavBar from './NavBar'
import IntroContainer from './IntroContainer'
import RecAndTopComponent from './RecAndTopComponent'

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
        <NavBar isSignedIn={this.state.isSignedIn} setLoggedIn={this.setLoggedIn} />
        <div className="container content">
          <IntroContainer/>
          { isSignedIn ?
            <RecAndTopComponent/> :
            null
          }
        </div>
      </div>
    );
  }
}

export default HomeComponent
