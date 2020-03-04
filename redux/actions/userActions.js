import Cookies from 'universal-cookie'
import jwtDecode from 'jwt-decode'
import { SET_USER, SET_AUTH_ERR } from './actionTypes'
import { setToken } from '../../plugins/axios'

const cookies = new Cookies()

export const setUser = (payload) => {
  return {
    type: SET_USER,
    payload
  }
}

export const setAuthError = (payload) => {
  return {
    type: SET_AUTH_ERR,
    payload
  }
}

export const signOut = () => {
  return (dispatch) => {
    cookies.remove('testUser', { path: '/' })
    dispatch(setUser(''))
  }
}

export const authenticateUser = (data) => {
  return (dispatch) => {
    axios.default
      .post('auth/adminAuthenticate', data)
      .then((response) => {
        const { token } = response.data
        cookies.set('testUser', token, { path: '/' })
        setToken(token)
        dispatch(setUser(jwtDecode(token).email))
      })
      .catch((error) => {
        dispatch(setAuthError(error.response.data.err))
      })
  }
}
