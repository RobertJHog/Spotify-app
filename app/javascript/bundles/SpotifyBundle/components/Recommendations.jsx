import React, { PureComponent } from 'react'
import Title from './Title'
import { connect } from 'react-redux'
import Recommendation from './Recommendation'
import { Box } from 'reactbulma'
import './Recommendations.scss'

class Recommendations extends PureComponent {
  renderRecommendation(topsong, index) {
    return (
      <Recommendation key={index} {...topsong} />
    )
  }

  render() {
    return(
      <div className="container recommendations">
        <div className="songs wrapper">
          <header>
            <Title content="Recommendations" />
          </header>
          <main className="container recommendations-overview">
            { this.props.topsongs.map(this.renderRecommendation) }
          </main>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ topsongs }) => ({
  topsongs
})

export default connect(mapStateToProps)(Recommendations)
