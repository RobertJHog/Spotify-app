import React, { Component } from 'react'
import PropTypes from 'prop-types'
import RecommendationItem from './RecommendationItem'

class RecommendationsOverview extends Component {
  // static propTypes = {
  //   tracks: PropTypes.array.isRequired
  // }

  renderRecommendations(tracks, index) {
    return (
      <RecommendationItem key={index} {...tracks} />
    )
  }

  render() {
    const recommendations = this.props.tracks
    console.log("props 1", recommendations)

    return(
      <div className="container recommendations-overview"> { recommendations.map(this.renderRecommendations) } </div>
    )
  }
}

export default RecommendationsOverview
