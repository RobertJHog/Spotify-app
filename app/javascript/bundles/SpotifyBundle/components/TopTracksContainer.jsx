import React, { Component } from 'react'
import PropTyps from 'prop-types'
import Title from './Title'
import { connect } from 'react-redux'
import TopTrackItem from './TopTrackItem'
import { Box } from 'reactbulma'
import fetchToptracks from '../actions/toptracks/fetch'
import './TopTracksContainer.scss'

class TopTracksContainer extends Component {
  // static propTypes = {
  //   artists: PropTypes.string.isRequired,
  //   duration_ms: PropTypes.integer.isRequired,
  //   name: PropTypes.string.isRequired,
  //   id: PropTypes.string.isRequired
  // }

  renderTopTrack(toptrack, index) {
    return (
      <TopTrackItem key={index} {...toptrack} />
    )
  }

  componentDidMount() {
    console.log("fetch function!")
    this.props.fetchToptracks()
}

  render() {
    return(
      <div className="container topsongs">
        <div className="songs wrapper">
          <header>
            <Title content="Top Songs" />
          </header>
          <main className="container topsongs-overview">
            { this.props.toptracks.map(this.renderTopTrack) }
          </main>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ toptracks }) => ({ toptracks })

export default connect(mapStateToProps, {fetchToptracks})(TopTracksContainer)
