require 'rspotify/oauth'

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :spotify, "3d785bc7bf48435db3d5bdcc71251384", "a0cb7cd0672e42f1a2e7f2643558040c", scope: 'user-top-read user-read-email'
end
