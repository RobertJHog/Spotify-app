require 'rspotify/oauth'

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :spotify, "c5848610763d4fb6a92d30ad96c3d832", "7a09f51facb64a7ea4c62dca8db03610", scope: 'user-read-email playlist-modify-public user-library-read user-library-modify'
end
