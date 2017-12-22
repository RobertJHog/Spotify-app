class RecommendationsController < ApplicationController
  layout "spotify_app"

  def index
    spotify_user = RSpotify::User.new(session[:spotify_access_token])
    @recommendations = RSpotify::Recommendations.generate(seed_tracks: params[:seeds_array])
    render json: @recommendations, status: :ok
  end

end
