import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Title from '../components/Title'

class TopSongItem extends PureComponent {
  static propTypes = {
    artist: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    album: PropTypes.string.isRequired
  }

  render() {
    const { _id, title, artist, album } = this.props

    return(
      <article className="TopSongItem">
        <h1> - Song - </h1>
        <h2> { artist} </h2>
        <p> { title } </p>
        <p> { album } </p>
      </article>
    )
  }
}

const mapStateToProps = { TopSongItem }

export default connect(null, mapStateToProps)(TopSongItem)
