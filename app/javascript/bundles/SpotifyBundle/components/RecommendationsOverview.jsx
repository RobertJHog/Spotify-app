import React, { Component } from 'react'
import PropTypes from 'prop-types'
import RecommendationItem from './RecommendationItem'

class RecommendationsOverview extends Component {
  // static propTypes = {
  //   artist: PropTypes.string.isRequired,
  //   title: PropTypes.string.isRequired,
  //   album: PropTypes.string.isRequired
  // }

  renderRecommendations(seed, index) {
    return (
      <RecommendationItem key={index} {...seed} />
    )
  }

  render() {
    const { seedsArray } = this.props

    return(
      <div className="container recommendations-overview"> { seedsArray.map(this.renderRecommendations) } </div>
    )
  }
}

export default RecommendationsOverview
