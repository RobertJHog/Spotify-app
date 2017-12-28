import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './NoRecommendations.scss'

class NoRecommendationsOverview extends Component {

  render() {

    return(
      <div className="container no-requirements">
        <p> Please like some songs to get recommendations. </p>
      </div>
    )
  }
}

export default NoRecommendationsOverview
