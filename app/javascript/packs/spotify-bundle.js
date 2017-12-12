import ReactOnRails from 'react-on-rails';

import SpotifyApp from '../bundles/SpotifyBundle/components/SpotifyApp';

// This is how react_on_rails can see the Spotify App in the browser.
ReactOnRails.register({
  SpotifyApp,
});
