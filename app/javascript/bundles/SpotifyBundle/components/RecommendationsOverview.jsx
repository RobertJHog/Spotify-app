import React, { Component } from 'react'
import PropTypes from 'prop-types'
import RecommendationItem from './RecommendationItem'

class RecommendationsOverview extends Component {
  static propTypes = {
    recommendations: PropTypes.array.isRequired
  }

  renderRecommendations(recommendation, index) {
    return (
      <RecommendationItem key={index} {...recommendation} />
    )
  }

  render() {
    const recommendations = this.props
    console.log("props", this.recommendations)

    return(
      <div>test </div>
      // <div className="container recommendations-overview"> { recommendations.map(this.renderRecommendations) } </div>
    )
  }
}

export default RecommendationsOverview
