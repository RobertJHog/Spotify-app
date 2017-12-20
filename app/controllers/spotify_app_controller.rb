# frozen_string_literal: true

class SpotifyAppController < ApplicationController
  layout "spotify_app"

  def index
    spotify_user = RSpotify::User.new(session[:spotify_access_token])
  end

end
