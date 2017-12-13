import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux'
import store from './store/store'
import TopSongsContainer from './components/TopSongsContainer'
import HomeComponent from './components/HomeComponent'

export default class SpotifyApp extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired, // this is passed from the Rails view
  };

  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    this.state = { name: this.props.name };
  }

  updateName = (name) => {
    this.setState({ name });
  };

  render() {
    return (
      <Provider store={store}>
        <HomeComponent name={name}/>
      </Provider>
    );
  }
}
