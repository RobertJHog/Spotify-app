import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';
import './SpotifyPlayer.scss'

class SpotifyPlayer extends PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired
  }

  render() {
    const { id } = this.props

    return (
        <iframe src={"https://open.spotify.com/embed?uri=spotify:track:" + id}
        frameBorder="0" allowtransparency="true"></iframe>
    )
  }
}

export default SpotifyPlayer
