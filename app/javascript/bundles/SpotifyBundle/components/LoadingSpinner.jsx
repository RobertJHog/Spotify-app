import React, { PureComponent, PropTypes } from 'react'
import LoadGif from '../../../../assets/images/Loading'

export default class Loading extends PureComponent {


  render() {
    let imageStyle = {width: '5vw', margin: '4em 0 0 10em'};

    return (
      <div className="loading">
        <img style={imageStyle} src={LoadGif} />
      </div>
    )
  }
}
