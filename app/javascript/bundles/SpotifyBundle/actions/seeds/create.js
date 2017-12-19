export const ADD_SEEDS = 'ADD_SEEDS'

export default (newSeeds) => {
  return {
    type: ADD_SEEDS,
    payload: newSeeds
  }
}
