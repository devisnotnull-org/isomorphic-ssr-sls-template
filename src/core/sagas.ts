import { all } from 'redux-saga/effects';

export function* fetchAllSaga() {
  yield all([
  ]);
}

export default function* rootSaga() {
  yield all([
    // Fetch our global parameters
    fetchAllSaga(),
  ]);
}
