# frozen_string_literal: true

class SpotifyAppController < ApplicationController
  layout "spotify_app"

  def index
    render :index
  end

end
