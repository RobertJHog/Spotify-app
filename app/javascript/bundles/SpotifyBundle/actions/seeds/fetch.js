export const FETCH_SEEDS = 'FETCH_SEEDS'

export default (seeds) => {
  return {
    type: FETCH_SEEDS,
    payload: seeds
  }
}
