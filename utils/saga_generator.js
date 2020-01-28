// @flow
import {
  HOTEL_CLOSE,
  HOTELS_ADD,
  HOTELS_FETCH,
} from '../constants/actionTypes';

const doCloseHotel = (id: number) => ({
  type: HOTEL_CLOSE,
  id,
});

const doAddHotels = (hotels: any) => ({
  type: HOTELS_ADD,
  hotels,
});

const doFetchHotels = (query:any) => ({
  type: HOTELS_FETCH,
  query,
});

export {
  doCloseHotel,
  doAddHotels,
  doFetchHotels,
};