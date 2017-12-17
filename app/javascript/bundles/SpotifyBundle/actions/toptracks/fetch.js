export const FETCH_TOPTRACKS = 'FETCH_TOPTRACKS'

export default (topTracks) => {
  return {
    type: FETCH_TOPTRACKS,
    payload: topTracks
  }
}
