import { SET_CONTACTS, FETCH_CONTACTS } from './actionTypes'
import { setError, setSuccess, setLoading } from './notificationActions'

export const setContacts = (payload) => {
  return {
    type: SET_CONTACTS,
    payload
  }
}

export const fetchContacts = (payload) => {
  return {
    type: FETCH_CONTACTS,
    payload
  }
}

// export const fetchContacts = () => {
//   return (dispatch) => {
//     dispatch(setLoading(true))
//     axios.default
//       .get('contacts')
//       .then((response) => {
//         dispatch(setContacts(response.data))
//         dispatch(setLoading(false))
//       })
//       .catch((error) => {
//         console.error(error)
//       })
//   }
// }

export const updateContacts = (data) => {
  return (dispatch) => {
    dispatch(setLoading(true))
    axios.default
      .post('contacts', data)
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
