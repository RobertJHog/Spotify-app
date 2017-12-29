import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Title from '../Title'
import { connect } from 'react-redux'
import fetchRecommendations from '../../actions/recommendations/fetch'
import resetLikes from '../../actions/toptracks/resetlikes'
import { Box, Button } from 'reactbulma'
import RecommendationsOverview from './RecommendationsOverview'
import NoRecommendationsOverview from './NoRecommendationsOverview'
import LoadingSpinner from '../LoadingSpinner'
import './Recommendations.scss'

class Recommendations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      isLoading: false,
      likedSongs: [],
      buttonActive: false
    }
    this.recommendationClick = this.recommendationClick.bind(this);
    this.resetLikesClick = this.resetLikesClick.bind(this);
  }

  static propTypes = {
    recommendations: PropTypes.array.isRequired
  }

  componentWillReceiveProps() {
      setTimeout(() => {
        this.checkLikes()
      }, 1000)
  }

  recommendationClassNames() {
    let classes = ''
    let likedLength = this.state.likedSongs.length

    if (this.state.isLoaded && likedLength > 0) { classes = 'Get new recommendations' }
    else if (likedLength > 0) { classes = 'Get Recommendations' }
    else { classes = 'To request one must like' }

    return classes
  }

  resetLikesClassNames() {
    let classes = ''
    let likedLength = this.state.likedSongs.length

    if (likedLength > 0) { classes = 'Reset likes' }
    else { classes = 'No likes to reset' }

    return classes
  }

  checkLikes() {
    const tracks = this.props.toptracks
    let likedArray = []
    tracks.forEach( function (track) {
      if (track.liked) {
        likedArray.push(track)
      }
      else {
      }
    })
    this.setLikes(likedArray)
  }

  setLikes(likedArray) {
    setTimeout(() => {
      if (likedArray.length > 0) {
        this.setState({likedSongs: likedArray})
      } else {
        this.setState({likedSongs: []})
      }
    }, 250)
  }

  recommendationClick() {
    const seedsArray = []
    seedsArray.length = 0
    this.createSeeds(seedsArray)
    this.setState({
      isLoading: true
    })
  }

  resetLikesClick() {
    let toptracks = this.props.toptracks
    this.props.resetLikes(toptracks)
    this.setState({
      likedSongs: this.state.likedSongs.length = 0
    })

  }

  createSeeds(seedsArray) {
    this.props.toptracks.map(function (toptrack) {
      if (toptrack.liked === true) {
        seedsArray.push(toptrack.id)
      } else {
        return
      }
    })
    setTimeout(() => {
      this.loadRecommendations(seedsArray)
    }, 750)
  }

  loadRecommendations(seedsArray) {
    if (seedsArray.length > 0) {
      this.props.fetchRecommendations(seedsArray)
      setTimeout(() => {
        this.setLoaded(seedsArray)
      }, 2000)
    } else {
      return
    }
  }

  setLoaded(seedsArray) {
    if (seedsArray) {
      this.setState({isLoaded: true})
      this.setState({isLoading: false})
    } else {
      this.setState({isLoaded: false})
    }
  }

  render() {
    const isLoaded = this.state.isLoaded
    const isLoading = this.state.isLoading
    const recommendations = this.props.recommendations[0]
    const { tracks } = { ...recommendations }
    const likedSongs = this.state.likedSongs

    return(
      <div className="container recommendations">
        <header>
          <Button className="rec-button" primary onClick={this.recommendationClick} disabled={likedSongs.length < 1}>
           { this.recommendationClassNames() }</Button>
           <Button className="reset-button" onClick={this.resetLikesClick} disabled={likedSongs.length === 0  || isLoading === true}>
            { this.resetLikesClassNames() }</Button>
        </header>
        { isLoading ?
          <LoadingSpinner/> :
          null
        }
        { isLoaded && (isLoading === false) ?
            <RecommendationsOverview/> :
            null
        }
        { (isLoaded === false) && (isLoading === false) ?
            <NoRecommendationsOverview/> :
            null
        }
      </div>
    )
  }
}

const mapStateToProps = ({ recommendations, toptracks }) => ({ recommendations, toptracks })

export default connect(mapStateToProps, {fetchRecommendations, resetLikes})(Recommendations)
