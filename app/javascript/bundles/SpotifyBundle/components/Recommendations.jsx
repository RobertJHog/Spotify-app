import React, { Component } from 'react'
import Title from './Title'
import { connect } from 'react-redux'
import RecommendationItem from './RecommendationItem'
import { Box, Button } from 'reactbulma'
import './Recommendations.scss'

class Recommendations extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }
  
  renderRecommendations(recommendation, index) {
    return (
      <RecommendationItem key={index} {...recommendation} />
    )
  }

  handleClick() {
    const recommendationsArray = []
    this.props.toptracks.map(function (toptrack) {
      if (toptrack.liked === true) {
        recommendationsArray.push(toptrack)
      } else {
        return
      }
    })
    console.log(recommendationsArray)
    // return recommendationsArray
  }

  // API call to spotify with recommendationsArray

  render() {
    return(
      <div className="container recommendations">
        <div className="songs wrapper">
          <header>
            <Button onClick={this.handleClick} primary>Get Recommendations</Button>
          </header>
          <main className="container recommendations-overview">
            { this.props.recommendations.map(this.renderRecommendations) }
          </main>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ recommendations, toptracks }) => ({ recommendations, toptracks })

export default connect(mapStateToProps)(Recommendations)
