import { FETCH_USER } from '../actions/user/fetch'

export default (state = [], { type, payload } = {}) => {
  switch(type) {
    case FETCH_USER :
      return [].concat(payload)

  default:
    return state
 }
}
