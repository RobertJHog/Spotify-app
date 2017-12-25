import PropTypes from 'prop-types';
import React from 'react';
import TopTracksContainer from './toptracks/TopTracksContainer'
import NavBar from './NavBar'
import IntroContainer from './IntroContainer'
import Recommendations from './recommendations/Recommendations'

class HomeComponent extends React.Component {

  render() {
    return (
      <div className="container react-app">
        <NavBar/>
        <div className="container content">
          <IntroContainer/>
          <div className="container rec-top">
            <TopTracksContainer/>
            <Recommendations/>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeComponent
