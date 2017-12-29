import { FETCH_TOPTRACKS } from '../actions/toptracks/fetch'
import { TOGGLE_LIKE_TRACK } from '../actions/toptracks/like'
import { RESET_LIKED_TRACKS } from '../actions/toptracks/resetlikes'

export default (state = [], { type, payload } = {}) => {
  switch(type) {
    case FETCH_TOPTRACKS :
      return [].concat(payload)

    case TOGGLE_LIKE_TRACK :
      return state.map((toptrack) => {
        if (toptrack.id === payload) {
          return { ...toptrack, liked: !toptrack.liked }
        }

        return toptrack
      })

      case RESET_LIKED_TRACKS :
        const unlikedArray = []
        return state.map((toptrack) => {
          return { ...toptrack, liked: false }
          unLikedArray.push(toptrack)

          return unLikedArray
        })

  default:
    return state
 }
}
