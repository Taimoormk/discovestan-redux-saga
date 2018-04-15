import { takeEvery, all } from 'redux-saga/effects';
import * as types from '../constants';
import fetchPostsDataSaga from './fetchPostsDataSaga';
import readMobilePostsDataSaga from './readMobilePostsDataSaga';

function* watchFetchPostsAction() {
  yield takeEvery(types.FETCH_POSTS_DATA, fetchPostsDataSaga);
}

function* watchReadMobilePostsAction() {
  yield takeEvery(types.READ_POSTS_DATA, readMobilePostsDataSaga);
}

export default function* rootSaga() {
  yield all ([ watchFetchPostsAction(), watchReadMobilePostsAction() ]);
}