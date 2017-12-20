import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux'
import store from './store/store'
import HomeComponent from './components/HomeComponent'

export default class SpotifyApp extends React.Component {
  // componentDidMount() {
  // if (this.props.fetchedTopTracks === false) {
  //   this.props.getQuestions()
  //
  // }
  static propTypes = {
    // name: PropTypes.string.isRequired, // this is passed from the Rails view
  };

  /**
   * @param props - Comes from the rails view.
   */
  constructor(props) {
    super(props);
      this.state = { toptracks: this.props };
  }

  render() {

    const { name } = this.props;

    return (
      <Provider store={store}>
        <HomeComponent name="Frits"/>
      </Provider>
    );
  }
}
