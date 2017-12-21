import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Title from '../../components/Title'
import SpotifyPlayer from '../../components/SpotifyPlayer'
import { Card, Box, Media, Content, Level, Checkbox, Button } from 'reactbulma'
import './RecommendationItem.scss'

class RecommendationItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  static propTypes = {
    name: PropTypes.string.isRequired,
    duration_ms: PropTypes.number.isRequired,
    track_number: PropTypes.number.isRequired
  }

  classNames() {
    let playerActive = this.state.isActive
    let classes = 'Listen to song'

    if (playerActive) { classes = 'Close spotify player' }

    return classes
  }

  handleClick() {
    if (this.state.isActive === false) {
      this.setState({isActive: true})
    } else {
      this.setState({isActive: false})
    }
  }

  render() {
    const { name, duration_ms, track_number, id } = this.props
    const albumName = this.props.album.name
    const imagelink = this.props.album.images[2].url
    const artist = this.props.artists[0].name
    const isActive = this.state.isActive
    let imageStyle = {width: '10vw'};

    return(
      <Box className="recommendation-item">
        <Media>
          <Media.Left>
          <img style={imageStyle} src={imagelink} alt="default pic" className="img-responsive"/>
          </Media.Left>
          <Media.Content>
            <Content>
              <p>
                <strong> { name } </strong> - <strong> { artist } </strong> <small> {Math.round(duration_ms*0.0000166667)} min</small>
              </p>
              <p>
                <small> Album: { albumName } </small> - <small> track number: { track_number } </small>
              </p>
            </Content>
          </Media.Content>
        </Media>
        <div className="player-item">
          <Button info onClick={this.handleClick}> {this.classNames() } </Button>
            { isActive ?
              <SpotifyPlayer id={id} /> :
              null
            }
        </div>
      </Box>
    )
  }
}

const mapStateToProps = { RecommendationItem }

export default connect(null, mapStateToProps)(RecommendationItem)
