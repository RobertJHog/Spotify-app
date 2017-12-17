import ReactOnRails from 'react-on-rails';
import SpotifyApp from '../bundles/SpotifyBundle/SpotifyApp';
import TopTracksContainer from '../bundles/SpotifyBundle/components/TopTracksContainer';
import Title from '../bundles/SpotifyBundle/components/Title';
import HomeComponent from '../bundles/SpotifyBundle/components/HomeComponent';
import NavBar from '../bundles/SpotifyBundle/components/NavBar';
import IntroContainer from '../bundles/SpotifyBundle/components/IntroContainer';
import Recommendations from '../bundles/SpotifyBundle/components/Recommendations';


// This is how react_on_rails can see the Spotify App in the browser.
ReactOnRails.register({
  SpotifyApp,
  HomeComponent,
  TopTracksContainer,
  Title,
  NavBar,
  IntroContainer,
  Recommendations
});
