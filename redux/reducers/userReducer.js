import { SET_USER, SET_AUTH_ERR } from '../actionTypes'

function getInitialState() {
  return { user: '', error: '' }
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
