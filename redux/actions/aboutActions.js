import { SET_ABOUT, FETCH_ABOUT } from './actionTypes'
import { setError, setSuccess, setLoading } from './notificationActions'

export const setAbout = (payload) => {
  return {
    type: SET_ABOUT,
    payload
  }
}

export const fetchAbout = (payload) => {
  return {
    type: FETCH_ABOUT,
    payload
  }
}

// export const fetchAbout = () => {
//   return (dispatch) => {
//     dispatch(setLoading(true))
//     axios.default
//       .get('about')
//       .then((response) => {
//         dispatch(setAbout(response.data))
//         dispatch(setLoading(false))
//       })
//       .catch((error) => {
//         console.error(error)
//       })
//   }
// }

export const updateAbout = (data) => {
  return (dispatch) => {
    dispatch(setLoading(true))
    axios.default
      .post('about', data)
      .then((response) => {
        console.log(response)
        dispatch(setLoading(false))
        dispatch(setSuccess(true))
      })
      .catch((error) => {
        dispatch(setLoading(false))
        dispatch(setError(true))
        console.error(error)
      })
    setTimeout(() => {
      dispatch(setError(false))
      dispatch(setSuccess(false))
    }, 2000)
  }
}
