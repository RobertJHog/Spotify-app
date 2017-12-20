import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Title from '../components/Title'
import picture from '../../../../assets/images/default-qofs.jpeg'
import { Card, Box, Media, Content, Level, Checkbox } from 'reactbulma'
import './RecommendationItem.scss'

class RecommendationItem extends PureComponent {
  // static propTypes = {
  //   artist: PropTypes.string.isRequired,
  //   title: PropTypes.string.isRequired,
  //   album: PropTypes.string.isRequired
  // }

  render() {
    const { id, title, artist, album, duration } = this.props
    let imageStyle = {width: '10vw'};

    return(
      <Box className="recommendation-item">
        <Media>
          <Media.Left>
          <img style={imageStyle} src={picture} alt="default pic" className="img-responsive"/>
          </Media.Left>
          <Media.Content>
            <Content>
              <p>
                <strong>{ artist }</strong> <strong>{ title }</strong> <small>{ duration }</small>
              </p>
              <p> Please like some songs to get your recommendations. </p>
            </Content>
          </Media.Content>
        </Media>
      </Box>
    )
  }
}

const mapStateToProps = { RecommendationItem }

export default connect(null, mapStateToProps)(RecommendationItem)
