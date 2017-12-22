import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Title from '../Title'
import { connect } from 'react-redux'
import fetchRecommendations from '../../actions/recommendations/fetch'
import { Box, Button } from 'reactbulma'
import RecommendationsOverview from './RecommendationsOverview'
import NoRecommendationsOverview from './NoRecommendationsOverview'
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
    if (seedsArray) {
      this.setState({isLoaded: true})
    } else {
      this.setState({isLoaded: false})
    }
  }

  classNames() {
    let classes = 'Get recommendations'

    if (this.state.isLoaded) { classes = 'Get new recommendations' }

    return classes
  }

  handleClick() {
    const seedsArray = this.state.seedsArray
    seedsArray.length = 0
    this.createSeeds(seedsArray)
  }

  createSeeds(seedsArray) {
    this.props.toptracks.map(function (toptrack) {
      if (toptrack.liked === true) {
        seedsArray.push(toptrack.id)
      } else {
        return
      }
    })
    this.loadRecommendations(seedsArray)
  }

  loadRecommendations(seedsArray) {
    if (seedsArray.length > 0) {
      this.props.fetchRecommendations(seedsArray)
      setTimeout(() => {
        this.setLoaded(seedsArray)
      }, 1000)
    } else {
      return
    }
  }

  render() {
    const isLoaded = this.state.isLoaded
    const recommendations = this.props.recommendations[0]
    const { tracks } = { ...recommendations }

    return(
      <div className="container recommendations">
        <div className="songs wrapper">
          <header>
            <Button primary onClick={this.handleClick}> { this.classNames() }</Button>
          </header>
           { isLoaded ?
             <RecommendationsOverview /> :
             <NoRecommendationsOverview />
           }
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ recommendations, toptracks }) => ({ recommendations, toptracks })

export default connect(mapStateToProps, {fetchRecommendations})(Recommendations)
