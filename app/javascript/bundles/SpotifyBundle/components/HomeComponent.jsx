import PropTypes from 'prop-types';
import React from 'react';
import TopTracksContainer from './toptracks/TopTracksContainer'
import NavBar from './NavBar'
import IntroContainer from './IntroContainer'
import Recommendations from './recommendations/Recommendations'

export default class HomeComponent extends React.Component {

  render() {

    return (
      <div className="container react-app">
        <NavBar/>
        <div className="content">
          <IntroContainer/>
          <div className="rec-top">
            <TopTracksContainer/>
            <Recommendations/>
          </div>
        </div>
      </div>
    );
  }
}
