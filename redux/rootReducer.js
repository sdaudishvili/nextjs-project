import { combineReducers } from 'redux';
import contactsReducer from './reducers/contactsReducer';
import userReducer from './reducers/userReducer';
import notificationReducer from './reducers/notificationReducer';

export const exampleInitialState = {};

const rootReducer = combineReducers({
  contacts: contactsReducer,
  notifs: notificationReducer,
  userState: userReducer
});

export default rootReducer;
