import { FETCH_TOPTRACKS } from '../actions/toptracks/fetch'
import { TOGGLE_LIKE_TRACK } from '../actions/toptracks/like'

const dummyTopTracks = [
  {
    id: 1,
    artist: 'Metallica',
    title: 'Sad But True',
    album: 'Metallica',
    liked: false
  },
  {
    id: 2,
    artist: 'Her',
    title: '5 minutes',
    album: '',
    liked: false
  },
  {
    id: 3,
    artist: 'Matador',
    title: 'Sad But True',
    album: 'Metallica',
    liked: false
  },
  {
    id: 4,
    artist: 'Breaking Benjamin',
    title: 'Sad But True',
    album: 'Metallica',
    liked: false
  },
  {
    id: 5,
    artist: 'Hermes houseband',
    title: 'Sad But True',
    album: 'Metallica',
    liked: false
  },
  {
    id: 6,
    artist: 'Lalala',
    title: 'Sad But True',
    album: 'Metallica',
    liked: false
  },
  {
    id: 7,
    artist: 'Metallica',
    title: 'Sad But True',
    album: 'Metallica',
    liked: false
  },
  {
    id: 8,
    artist: 'Her',
    title: '5 minutes',
    album: '',
    liked: false
  },
  {
    id: 9,
    artist: 'Matador',
    title: 'Sad But True',
    album: 'Metallica',
    liked: false
  },
  {
    id: 10,
    artist: 'Breaking Benjamin',
    title: 'Sad But True',
    album: 'Metallica',
    liked: false
  },
  {
    id: 11,
    artist: 'Hermes houseband',
    title: 'Sad But True',
    album: 'Metallica',
    liked: false
  },
  {
    id: 12,
    artist: 'Lalala',
    title: 'Sad But True',
    album: 'Metallica',
    liked: false
  },
]

export default (state = dummyTopTracks, { type, payload } = {}) => {
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
