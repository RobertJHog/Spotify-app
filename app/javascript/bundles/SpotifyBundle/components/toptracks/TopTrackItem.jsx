import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Title from '../../components/Title'
import { Card, Box, Media, Content, Level, Checkbox } from 'reactbulma'
import LikeButton from '../../components/LikeButton'
import likeTrack from '../../actions/toptracks/like'
import './TopTrackItem.scss'

class TopTrackItem extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    duration_ms: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    track_number: PropTypes.number.isRequired
  }

  toggleLike = () => {
      this.props.toggleLike(this.props.id)
  }

  render() {
    const { id, name, duration_ms, liked, track_number } = this.props
    const artist = this.props.artists[0].name
    const imagelink = this.props.album.images[2].url
    const albumName = this.props.album.name

    let imageStyle = {width: '10vw'};

    return(
      <Box className="topsong-item">
        <Media>
          <Media.Left>
          <img style={imageStyle} src={imagelink} alt="default pic" className="img-responsive"/>
          </Media.Left>
          <Media.Content>
            <Content>
              <p><strong>{ name }</strong> - <strong> { artist}</strong> </p>
              <p> <small> ({Math.round(duration_ms*0.0000166667)} min) - Album: { albumName } </small></p>
              <LikeButton onChange={this.toggleLike} liked={liked} />
            </Content>
          </Media.Content>
        </Media>
      </Box>
    )
  }
}

const mapDispatchToProps = { toggleLike: likeTrack }

export default connect(null, mapDispatchToProps)(TopTrackItem)
