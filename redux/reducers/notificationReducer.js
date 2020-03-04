import { SET_ERROR, SET_SUCCESS, SET_LOADING } from '../actions/actionTypes'

const initialState = {
  success: false,
  error: false,
  loading: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR: {
      return {
        ...state,
        error: action.payload
      }
    }
    case SET_SUCCESS: {
      return {
        ...state,
        success: action.payload
      }
    }
    case SET_LOADING: {
      return {
        ...state,
        loading: action.payload
      }
    }
    default:
      return state
  }
}

export default reducer
