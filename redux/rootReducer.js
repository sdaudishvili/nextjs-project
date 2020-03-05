import { combineReducers } from 'redux'
import contactsReducer from './reducers/contactsReducer'

export const exampleInitialState = {}

const rootReducer = combineReducers({
  contacts: contactsReducer
})

export default rootReducer
