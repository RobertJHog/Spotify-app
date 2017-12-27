import PropTypes from 'prop-types';
import React from 'react';
import TopTracksContainer from './toptracks/TopTracksContainer'
import Recommendations from './recommendations/Recommendations'

class RecAndTopComponent extends React.Component {

  render() {
    return (
      <div className="container rec-top">
        <TopTracksContainer/>
        <Recommendations/>
      </div>
    );
  }
}

export default RecAndTopComponent
