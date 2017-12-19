import axios from 'axios';
export const FETCH_RECOMMENDATIONS = 'FETCH_RECOMMENDATIONS'

export default () => {
  return (dispatch) => {
    return axios.get('/recommendations')
    .then((json) => {
      dispatch({
        type: FETCH_RECOMMENDATIONS,
        payload: json.data,
        receivedAt: Date.now()
      })
    })
  }
}
