require 'rspotify/oauth'

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :spotify, "feea19e6679447c68a83792f03f90bf1", "6ce4129636c6493b95ab73faa4ebf620", scope: 'user-top-read user-read-email'
end
