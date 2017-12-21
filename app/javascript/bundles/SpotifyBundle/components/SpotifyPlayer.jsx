import React, { PureComponent } from 'react'

class SpotifyPlayer extends PureComponent {

  render() {
    const { id } = this.props

    return (
      <div>
        <iframe src={"https://open.spotify.com/embed?uri=spotify:track:" + id}
        frameBorder="0" allowtransparency="true"></iframe>
      </div>
    )
  }
}

export default SpotifyPlayer
