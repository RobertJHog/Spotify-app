import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Title from '../components/Title'
import picture from '../../../../assets/images/default-qofs.jpeg'
import { Card, Box, Media, Content, Level, Checkbox } from 'reactbulma'
import LikeButton from '../components/LikeButton'
import likeTrack from '../actions/toptracks/like'
import './LikeButton.scss'
import './TopTrackItem.scss'

class TopTrackItem extends React.Component {
  // static propTypes = {
  //   artist: PropTypes.string.isRequired,
  //   title: PropTypes.string.isRequired,
  //   album: PropTypes.string.isRequired
  // }

  toggleLike = () => {
      this.props.toggleLike(this.props.id)
    // const seedsArray = this.props.seeds
    // for (let id of seedsArray) {
    //   if (this.props.seeds._id === id) {
    //         this.props.seeds.pop(_id)
    //   } else {
    //     this.props.seeds.push(id)
    //   }
    // }
    // return
  }

  render() {
    const { id, title, artist, album, liked } = this.props
    let imageStyle = {width: '10vw'};

    return(
      <Box className="topsong-item">
        <Media>
          <Media.Left>
          <img style={imageStyle} src={picture} alt="default pic" className="img-responsive"/>
          </Media.Left>
          <Media.Content>
            <Content>
              <p><strong>{ artist }</strong> - <strong>{ title }</strong> <small>(3m)</small></p>
              <LikeButton onChange={this.toggleLike} liked={liked} />
              <p className="song-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas.
              </p>
            </Content>
          </Media.Content>
        </Media>
      </Box>
    )
  }
}

const mapDispatchToProps = { toggleLike: likeTrack }

export default connect(null, mapDispatchToProps)(TopTrackItem)
