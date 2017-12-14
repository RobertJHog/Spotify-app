import React, { PureComponent } from 'react'
import Title from './Title'
import { connect } from 'react-redux'
import TopSongItem from './TopSongItem'
import { Box } from 'reactbulma'
import './TopSongsContainer.scss'

class TopSongsContainer extends PureComponent {
  renderTopSong(topsong, index) {
    return (
      <TopSongItem key={index} {...topsong} />
    )
  }

  render() {
    return(
      <div className="container topsongs">
        <div className="songs wrapper">
          <header>
            <Title content="Top Songs" />
          </header>
          <main className="container topsongs-overview">
            { this.props.topsongs.map(this.renderTopSong) }
          </main>
        </div>
      </div>
    )
  }
}


const mapStateToProps = ({ topsongs }) => ({
  topsongs
})

export default connect(mapStateToProps)(TopSongsContainer)
