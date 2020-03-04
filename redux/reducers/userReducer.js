import Cookies from 'universal-cookie'
import jwtDecode from 'jwt-decode'
import { SET_USER, SET_AUTH_ERR } from '../actions/actionTypes'
import { setToken } from '../../plugins/axios'

function getInitialState() {
  const cookies = new Cookies()
  const token = cookies.get('testUser')
  let res = { user: '', error: '' }
  if (token !== undefined) {
    const parsedToken = jwtDecode(token)
    const now = new Date().getTime() / 1000
    if (parsedToken.exp - now < 0) {
      cookies.remove('testUser', { path: '/' })
    } else {
      setToken(token)
      res = { ...res, user: jwtDecode(token).email }
    }
  }
  return res
}

const initialState = getInitialState()

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: {
      return {
        user: action.payload,
        error: ''
      }
    }
    case SET_AUTH_ERR: {
      return {
        user: '',
        error: action.payload
      }
    }
    default:
      return state
  }
}

export default reducer
