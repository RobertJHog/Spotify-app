import axios from 'axios';
export const FETCH_TOPTRACKS = 'FETCH_TOPTRACKS'

export default () => {
  return (dispatch) => {
    return axios.get('/toptracks')
    .then((json) => {
      dispatch({
        type: FETCH_TOPTRACKS,
        payload: json.data,
        receivedAt: Date.now()
      })
    })
  }
}
