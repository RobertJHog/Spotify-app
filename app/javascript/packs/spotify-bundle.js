import ReactOnRails from 'react-on-rails';
import SpotifyApp from '../bundles/SpotifyBundle/SpotifyApp';
import TopSongsContainer from '../bundles/SpotifyBundle/components/TopSongsContainer';
import Title from '../bundles/SpotifyBundle/components/Title';
import HomeComponent from '../bundles/SpotifyBundle/components/HomeComponent';
import NavBar from '../bundles/SpotifyBundle/components/NavBar';
import IntroContainer from '../bundles/SpotifyBundle/components/IntroContainer'


// This is how react_on_rails can see the Spotify App in the browser.
ReactOnRails.register({
  SpotifyApp,
  HomeComponent,
  TopSongsContainer,
  Title,
  NavBar,
  IntroContainer
});
