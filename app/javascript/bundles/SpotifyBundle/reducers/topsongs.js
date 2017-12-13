const dummySongs = [
  {
    id: 1,
    artist: 'Metallica',
    title: 'Sad But True',
    album: 'Metallica'
  },
  {
    id: 2,
    artist: 'Her',
    title: '5 minutes',
    album: ''
  }
]

export default (state = dummySongs, { type, payload } = {}) => {
  return state
}
