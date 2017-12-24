import React, { PureComponent } from 'react'
import './SpotifyPlayer.scss'

class SpotifyPlayer extends PureComponent {

  render() {
    const { id } = this.props

    return (
        <iframe src={"https://open.spotify.com/embed?uri=spotify:track:" + id}
        frameBorder="0" allowtransparency="true"></iframe>
    )
  }
}

export default SpotifyPlayer
