import PropTypes from 'prop-types';
import React from 'react';
import TopTracksContainer from './TopTracksContainer'
import NavBar from './NavBar'
import IntroContainer from './IntroContainer'
import Recommendations from './Recommendations'

export default class HomeComponent extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired
  };

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
