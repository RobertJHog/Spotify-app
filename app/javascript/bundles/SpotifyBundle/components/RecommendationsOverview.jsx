import React, { Component } from 'react'
import PropTypes from 'prop-types'
import RecommendationItem from './RecommendationItem'

class RecommendationsOverview extends Component {
  static propTypes = {
    recommendations: PropTypes.array.isRequired
  }

  renderRecommendations(tracks, index) {
    return (
      <RecommendationItem key={index} {...tracks} />
    )
  }

  render() {
    const recommendations = this.props.recommendations[0]
    const { tracks } = { ...recommendations }
    console.log("props 1", recommendations)
    console.log("props 1", tracks)

    return(
      <div> test </div>
      // <div className="container recommendations-overview"> { tracks.map(this.renderRecommendations) } </div>
    )
  }
}

export default RecommendationsOverview
