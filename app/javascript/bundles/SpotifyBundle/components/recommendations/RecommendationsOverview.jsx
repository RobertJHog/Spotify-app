import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import RecommendationItem from '../recommendations/RecommendationItem'
import fetchRecommendations from '../../actions/recommendations/fetch'

class RecommendationsOverview extends Component {
  static propTypes = {
    tracks: PropTypes.array.isRequired,
    recommendations: PropTypes.array.isRequired
  }

  renderRecommendations(recommendations, index) {
    return (
      <RecommendationItem key={index} {...recommendations} />
    )
  }

  render() {
    const recommendations = this.props.recommendations[0]
    const { tracks } = { ...recommendations }

    return(
      <div className="container recommendations-overview"> { tracks.map(this.renderRecommendations) } </div>
    )
  }
}

const mapStateToProps = ({ recommendations }) => ({ recommendations })

export default connect(mapStateToProps)(RecommendationsOverview)
