import { FETCH_SEEDS } from '../actions/seeds/fetch'
import { CREATE_SEED } from '../actions/seeds/create'

const Seeds = []

export default (state = Seeds, { type, payload } = {}) => {
  switch(type) {
    case FETCH_SEEDS :
      return [].concat(payload)

    case CREATE_SEED :
      return [Object.assign({}, payload)].concat(state)

    // case SEED_REMOVED :
    //   return state.filter((seed) => (seed._id !== payload._id))

  default:
    return state
 }
}
