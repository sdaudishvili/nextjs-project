import { takeLatest, all, call } from 'redux-saga/effects'
import fetch from 'isomorphic-fetch'

import { FETCH_CONTACTS } from './actions/actionTypes'

export const delay = (ms) => new Promise((res) => setTimeout(res, ms))

export function* fetchData({ payload }) {
  console.log(payload)
  const data = yield call(fetch, 'https://alizi-back.leavingstone.club/api/Info')
  const r = yield data.json()
  console.log(r)
}

function* watchFetchData() {
  yield takeLatest(FETCH_CONTACTS, fetchData)
}

export default function* rootSaga(payload) {
  yield all([watchFetchData(payload)])
}
