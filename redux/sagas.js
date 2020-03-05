import { takeLatest, all, call, put } from 'redux-saga/effects'
import fetch from 'isomorphic-fetch'

import { FETCH_CONTACTS } from './actions/actionTypes'
import { setContacts } from './actions/contactsActions'

function* fetchData() {
  const res = yield call(fetch, 'https://alizi-back.leavingstone.club/api/Info')
  const data = yield res.json()
  yield put(setContacts(data))
}

function* watchFetchData() {
  yield takeLatest(FETCH_CONTACTS, fetchData)
}

export default function* rootSaga(payload) {
  yield all([watchFetchData(payload)])
}
