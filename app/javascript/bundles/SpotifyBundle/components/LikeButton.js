import React, { PureComponent } from 'react'
import HeartGrey from '../../../../assets/images/heart-grey.svg'
import HeartRed from '../../../../assets/images/heart-red.svg'
import './LikeButton.scss'

class LikeButton extends PureComponent {

  classNames() {
    const { liked } = this.props

    let classes = 'LikeButton'

    if (liked) { classes += ' liked' }

    return classes
  }

  render() {
    const { liked, onChange } = this.props

    return (
      <p className={ this.classNames() }>
        <button onClick={onChange}>
          <img className="heart" alt="liked" src={ liked ? HeartRed : HeartGrey } />
          <span className="copy">
            <img className="heart" alt="not liked" src={ liked ? HeartRed : HeartGrey } />
          </span>
        </button>
        <span className="likes">{ liked ? 'You like this' : null }</span>
      </p>
    )
  }
}

export default LikeButton
