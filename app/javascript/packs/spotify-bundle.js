import ReactOnRails from 'react-on-rails';
import SpotifyApp from '../bundles/SpotifyBundle/SpotifyApp';
import TopTracksContainer from '../bundles/SpotifyBundle/components/toptracks/TopTracksContainer';
import TopTrackItem from '../bundles/SpotifyBundle/components/toptracks/TopTrackItem';
import Title from '../bundles/SpotifyBundle/components/Title';
import HomeComponent from '../bundles/SpotifyBundle/components/HomeComponent';
import NavBar from '../bundles/SpotifyBundle/components/NavBar';
import IntroContainer from '../bundles/SpotifyBundle/components/IntroContainer';
import Recommendations from '../bundles/SpotifyBundle/components/recommendations/Recommendations';
import RecommendationsOverview from '../bundles/SpotifyBundle/components/recommendations/RecommendationsOverview';
import NoRecommendationsOverview from '../bundles/SpotifyBundle/components/recommendations/NoRecommendationsOverview';
import RecommendationItem from '../bundles/SpotifyBundle/components/recommendations/RecommendationItem';


// This is how react_on_rails can see the Spotify App in the browser.
ReactOnRails.register({
  SpotifyApp,
  HomeComponent,
  TopTracksContainer,
  TopTrackItem,
  Title,
  NavBar,
  IntroContainer,
  Recommendations,
  RecommendationsOverview,
  NoRecommendationsOverview,
  RecommendationItem
});
