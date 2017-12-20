import { FETCH_RECOMMENDATIONS } from '../actions/recommendations/fetch'

export default (state = [], { type, payload } = {}) => {
  switch(type) {
    case FETCH_RECOMMENDATIONS :
      return [].concat(payload)

  default:
    return state
 }
}
