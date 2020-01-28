// @flow
import { call, put } from 'redux-saga/effects';
import type { SagaIterator } from 'redux-saga';
import { doAddHotels } from '../utils/saga_generator';
import { fetchHotels } from '../api/hotels';

function* handleFetchHotels(): SagaIterator {
  try {
    const result: Object = yield call(fetchHotels);
    if (result.status !== 404)
      yield put(doAddHotels(result));
    else
      throw result;
  } catch( error ) {
    console.log(error);
  }
}
export {
  handleFetchHotels,
};