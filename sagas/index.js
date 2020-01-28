// @flow
import { takeEvery, all } from 'redux-saga/effects';
import type { SagaIterator } from 'redux-saga';
import { HOTELS_FETCH } from '../constants/actionTypes';
import { handleFetchHotels } from './hotel';

function *watchAll():SagaIterator {
  yield all([
    takeEvery(HOTELS_FETCH, handleFetchHotels),
  ]);
}

export default watchAll;