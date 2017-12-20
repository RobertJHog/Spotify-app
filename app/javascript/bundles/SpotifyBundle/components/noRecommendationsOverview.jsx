import React, { Component } from 'react'
import PropTypes from 'prop-types'
import RecommendationItem from './RecommendationItem'

class NoRecommendationsOverview extends Component {

  render() {

    return(
      <div className="container recommendations-overview">
        <RecommendationItem name={"Please like some songs"} />
      </div>
    )
  }
}

export default NoRecommendationsOverview
