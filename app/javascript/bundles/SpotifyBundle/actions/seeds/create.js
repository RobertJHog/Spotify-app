export const CREATE_SEED = 'CREATE_SEED'

export default (newSeed) => {
  return {
    type: CREATE_SEED,
    payload: newSeed
  }
}
