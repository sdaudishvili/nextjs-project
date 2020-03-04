import { combineReducers } from 'redux'
import contactsReducer from './reducers/contactsReducer'

const rootReducer = combineReducers({
  contacts: contactsReducer
})

export default rootReducer
