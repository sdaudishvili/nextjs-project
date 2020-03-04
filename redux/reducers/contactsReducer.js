import { SET_CONTACTS } from '../actions/actionTypes'

const initialState = {
  data: {}
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CONTACTS: {
      return {
        ...state,
        data: action.payload
      }
    }
    default:
      return state
  }
}

export default reducer
