import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Title from './Title'
import { connect } from 'react-redux'
import fetchRecommendations from '../actions/recommendations/fetch'
import { Box, Button } from 'reactbulma'
import RecommendationsOverview from './RecommendationsOverview'
import NoRecommendationsOverview from './noRecommendationsOverview'
import './Recommendations.scss'

class Recommendations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      seedsArray: []
    }
    this.handleClick = this.handleClick.bind(this);
  }

  static propTypes = {
    recommendations: PropTypes.array.isRequired
  }

  setLoaded(seedsArray) {
    console.log(seedsArray.length)
    if (seedsArray) {
      this.setState({isLoaded: true})
    } else {
      this.setState({isLoaded: false})
    }
  }

  handleClick() {
    const seedsArray = this.state.seedsArray
    seedsArray.length = 0

    this.props.toptracks.map(function (toptrack) {
      if (toptrack.liked === true) {
        seedsArray.push(toptrack.id)
      } else {
        return
      }
    })
    this.setLoaded(seedsArray)
    this.props.fetchRecommendations(seedsArray)
  }

  render() {
    const isLoaded = this.state.isLoaded
    const recommendations = this.props.recommendations

    return(
      <div className="container recommendations">
        <div className="songs wrapper">
          <header>
            <Button primary onClick={this.handleClick}>Get Recommendations</Button>
          </header>
           { isLoaded ?
             <RecommendationsOverview recommendations = {recommendations} /> :
             <NoRecommendationsOverview />
           }
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ recommendations, toptracks }) => ({ recommendations, toptracks })

export default connect(mapStateToProps, {fetchRecommendations})(Recommendations)
