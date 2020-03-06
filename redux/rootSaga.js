import { all } from 'redux-saga/effects'

import watchAuthUser from './sagas/userSaga'
import watchFetchData from './sagas/contactSaga'

export default function* rootSaga(payload) {
  yield all([watchFetchData(payload), watchAuthUser(payload)])
}
