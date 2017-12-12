# frozen_string_literal: true

class SpotifyAppController < ApplicationController
  layout "spotify_app"

  def index
    @hello_world_props = { name: "Sir" }
  end
end
