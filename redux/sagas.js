import { takeLatest, all, call, put } from 'redux-saga/effects'
import fetch from 'isomorphic-fetch'

import { FETCH_CONTACTS, AUTHENTICATE_USER } from './actions/actionTypes'
import { setContacts } from './actions/contactsActions'
import { setUser } from './actions/userActions'

function* fetchData() {
  const res = yield call(fetch, 'https://alizi-back.leavingstone.club/api/Info')
  const data = yield res.json()
  yield put(setContacts(data))
}

function* authenticateUser({ payload }) {
  // const res = yield call(fetch, 'https://alizi-back.leavingstone.club/api/Info')
  yield put(setUser(payload))
}

function* watchFetchData() {
  yield takeLatest(FETCH_CONTACTS, fetchData)
}
function* authUser() {
  yield takeLatest(AUTHENTICATE_USER, authenticateUser)
}

export default function* rootSaga(payload) {
  yield all([watchFetchData(payload), authUser(payload)])
}
