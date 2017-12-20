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


  // <strong>{ name }</strong> <strong> TEST </strong> <small>{ duration_ms }</small>

  render() {
    const { name, duration_ms} = this.props
    const imagelink = this.props.album.images[2].url
    const artist = this.props.artists[0].name
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
            </Content>
          </Media.Content>
        </Media>
      </Box>
    )
  }
}

const mapStateToProps = { RecommendationItem }

export default connect(null, mapStateToProps)(RecommendationItem)
