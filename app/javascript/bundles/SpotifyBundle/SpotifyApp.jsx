import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux'
import store from './store/store'
import HomeComponent from './components/HomeComponent'

export default class SpotifyApp extends React.Component {
  static propTypes = {
  };

  render() {

    const { name } = this.props;

    return (
      <Provider store={store}>
        <HomeComponent/>
      </Provider>
    );
  }
}
