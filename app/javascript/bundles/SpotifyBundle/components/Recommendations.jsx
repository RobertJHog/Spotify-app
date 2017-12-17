import React, { Component } from 'react'
import Title from './Title'
import { connect } from 'react-redux'
import RecommendationItem from './RecommendationItem'
import { Box } from 'reactbulma'
import './Recommendations.scss'

class Recommendations extends React.Component {
  renderRecommendations(recommendation, index) {
    return (
      <RecommendationItem key={index} {...recommendation} />
    )
  }

  render() {
    return(
      <div className="container recommendations">
        <div className="songs wrapper">
          <header>
            <Title content="Recommendations" />
          </header>
          <main className="container recommendations-overview">
            { this.props.recommendations.map(this.renderRecommendations) }
          </main>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ recommendations }) => ({ recommendations })

export default connect(mapStateToProps)(Recommendations)
