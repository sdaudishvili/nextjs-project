import { combineReducers } from 'redux'
import contactsReducer from './reducers/contactsReducer'
import userReducer from './reducers/userReducer'

export const exampleInitialState = {}

const rootReducer = combineReducers({
  contacts: contactsReducer,
  userState: userReducer
})

export default rootReducer
