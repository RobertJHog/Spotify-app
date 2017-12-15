import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Title from '../components/Title'
import picture from '../../../../assets/images/default-qofs.jpeg'
import { Card, Box, Media, Content, Level, Checkbox } from 'reactbulma'
import './TopSongItem.scss'

class TopSongItem extends PureComponent {
  static propTypes = {
    artist: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    album: PropTypes.string.isRequired
  }

  render() {
    const { _id, title, artist, album } = this.props
    let imageStyle = {width: '10vw'};

    return(
      <Box className="topsong-item">
        <Media>
          <Media.Left>
          <img style={imageStyle} src={picture} alt="default pic" className="img-responsive"/>
          </Media.Left>
          <Media.Content>
            <Content>
              <p>
                <strong>{ artist }</strong> - <strong>{ title }</strong> <small>(3m)</small>
                <Checkbox className="favorite"> Favorite me </Checkbox>
              </p>
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

const mapStateToProps = { TopSongItem }

export default connect(null, mapStateToProps)(TopSongItem)
