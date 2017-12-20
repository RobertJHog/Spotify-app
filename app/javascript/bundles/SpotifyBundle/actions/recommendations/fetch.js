import axios from 'axios';
export const FETCH_RECOMMENDATIONS = 'FETCH_RECOMMENDATIONS'

export default (seedsArray) => {
  return (dispatch) => {
    const query = "?seeds_array[]=" + seedsArray.join("&seeds_array[]=")
    return axios.get('/recommendations'+query)
    .then((json) => {
      dispatch({
        type: FETCH_RECOMMENDATIONS,
        payload: json.data,
        receivedAt: Date.now()
      })
    })
  }
}
