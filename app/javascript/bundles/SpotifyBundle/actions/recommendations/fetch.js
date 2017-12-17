export const FETCH_RECOMMENDATIONS = 'FETCH_RECOMMENDATIONS'

export default (recommendations) => {
  return {
    type: FETCH_RECOMMENDATIONS,
    payload: recommendations
  }
}
