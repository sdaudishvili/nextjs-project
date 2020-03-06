import { takeLatest, put, call } from 'redux-saga/effects'
import fetch from 'isomorphic-fetch'

import { FETCH_CONTACTS } from '../actionTypes'
import { setContacts } from '../actions/contactsActions'

function* fetchData() {
  const res = yield call(fetch, 'https://alizi-back.leavingstone.club/api/Info')
  const data = yield res.json()
  yield put(setContacts(data))
}

export default function* watchFetchData() {
  yield takeLatest(FETCH_CONTACTS, fetchData)
}
