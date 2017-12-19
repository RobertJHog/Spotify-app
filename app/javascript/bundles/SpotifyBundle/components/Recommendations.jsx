import React, { Component } from 'react'
import Title from './Title'
import { connect } from 'react-redux'
import fetchRecommendations from '../actions/recommendations/fetch'
import addSeeds from '../actions/seeds/create'
import { Box, Button } from 'reactbulma'
import RecommendationsOverview from './RecommendationsOverview'
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

  componentDidMount() {
    console.log("fetch rec function!")
    this.props.fetchRecommendations()
  }

  setLoaded(seedsArray) {
    console.log(seedsArray.length)
    if (seedsArray) {
      this.setState({isLoaded: true})
    } else {
      this.setState({isLoaded: false})
    }
  }

  // checkId() {
  //   this.props.toptracks.forEach(function(toptrack, y) {
  //     if (toptrack.id !== y.id) {
  //       return true
  //     } else {
  //       return false
  //     }
  //   }
  // }

  handleClick() {
    const seedsArray = this.state.seedsArray
    seedsArray.length = 0

    this.props.toptracks.map(function (toptrack) {
      let likedArray
      if (toptrack.liked === true) {
        seedsArray.push(toptrack)
      } else {
        return
      }
    })
    this.setLoaded(seedsArray)
  }

  render() {
    const isLoaded = this.state.isLoaded
    const seedsArray = this.state.seedsArray

    return(
      <div className="container recommendations">
        <div className="songs wrapper">
          <header>
            <Button primary onClick={this.handleClick}>Get Recommendations</Button>
          </header>
           { isLoaded ?
             <RecommendationsOverview seedsArray = {seedsArray} /> :
             null
           }
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ recommendations, toptracks }) => ({ recommendations, toptracks })
// const mapDispatchToProps = { handleClick: addSeeds }


export default connect(mapStateToProps, {fetchRecommendations})(Recommendations)
