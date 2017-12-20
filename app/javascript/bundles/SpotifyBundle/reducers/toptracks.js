import { FETCH_TOPTRACKS } from '../actions/toptracks/fetch'
import { TOGGLE_LIKE_TRACK } from '../actions/toptracks/like'

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

  default:
    return state
 }
}
