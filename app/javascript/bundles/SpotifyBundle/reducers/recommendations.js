import { FETCH_RECOMMENDATIONS } from '../actions/recommendations/fetch'

const dummyRecommendations = [
  {
    artist: 'Matador',
    title: 'Sad But True',
    album: 'Metallica'
  },
  {
    artist: 'Breaking Benjamin',
    title: 'Sad But True',
    album: 'Metallica'
  },
  {
    artist: 'Hermes houseband',
    title: 'Sad But True',
    album: 'Metallica'
  },
  {
    artist: 'Lalala',
    title: 'Sad But True',
    album: 'Metallica'
  },
  {
    artist: 'Metallica',
    title: 'Sad But True',
    album: 'Metallica'
  },
  {
    artist: 'Her',
    title: '5 minutes',
    album: ''
  },
  {
    artist: 'Matador',
    title: 'Sad But True',
    album: 'Metallica'
  }
]

export default (state = [], { type, payload } = {}) => {
  switch(type) {
    case FETCH_RECOMMENDATIONS :
      return [].concat(payload)

  default:
    return state
 }
}
