import PropTypes from 'prop-types';
import React from 'react';
import TopSongsContainer from './TopSongsContainer'
import NavBar from './NavBar'
import IntroContainer from './IntroContainer'
import Recommendations from './Recommendations'

export default class HomeComponent extends React.Component {
  static propTypes = {
    // name: PropTypes.string.isRequired, // this is passed from the Rails view
  };

  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    // this.state = { name: this.props.name };
  }

  // updateName = (name) => {
  //   this.setState({ name });
  // };

  render() {
    return (
      <div className="container react-app">
        <NavBar/>
        <div className="content">
          <IntroContainer/>
          <div className="rec-top">
            <Recommendations/>
            <TopSongsContainer/>
          </div>
        </div>
      </div>
    );
  }
}
