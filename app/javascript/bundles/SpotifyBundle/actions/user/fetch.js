import axios from 'axios';
export const FETCH_USER = 'FETCH_USER'

export default () => {
  return (dispatch) => {
    return axios.get('/users')
    .then((json) => {
      dispatch({
        type: FETCH_USER,
        payload: json.data,
        receivedAt: Date.now()
      })
    })
  }
}
