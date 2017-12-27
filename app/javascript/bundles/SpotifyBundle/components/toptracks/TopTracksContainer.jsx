import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Title from '../Title'
import { connect } from 'react-redux'
import TopTrackItem from './TopTrackItem'
import { Box } from 'reactbulma'
import fetchToptracks from '../../actions/toptracks/fetch'
import fetchUser from '../../actions/user/fetch'
import './TopTracksContainer.scss'

class TopTracksContainer extends Component {
  static propTypes = {
    toptracks: PropTypes.array.isRequired,
    user: PropTypes.array.isRequired
  }

  renderTopTrack(toptrack, index) {
    return (
      <TopTrackItem key={index} {...toptrack} />
    )
  }

  componentDidUpdate() {
    setTimeout(() => {
      if (this.props.isSignedIn && this.props.toptracks.length < 1) {
        this.props.fetchToptracks()
      }
    }, 1000)
  }

  render() {
    return(
      <div className="container topsongs">
        <header>
          <Title className="title" content="Your spotify Top Tracks" />
        </header>
        <main className="container topsongs-overview">
          { this.props.toptracks.map(this.renderTopTrack) }
        </main>
      </div>
    )
  }
}

const mapStateToProps = ({ toptracks, user }) => ({ toptracks, user })

export default connect(mapStateToProps, {fetchToptracks, fetchUser})(TopTracksContainer)
