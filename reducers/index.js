// @flow
import { HOTEL_CLOSE, HOTELS_ADD } from '../constants/actionTypes';

const INITIAL_STATE = [];

const applyAddHotels = (state, action) =>
  action.hotels;

const applyCloseHotel = (state, action) =>
  state.filter((s) => s.objectID !== action.id);

function rootReducer(state: Object = INITIAL_STATE, action: Object) {
  switch(action.type) {
    case HOTELS_ADD : {
      return applyAddHotels(state, action);
    }
    case HOTEL_CLOSE : {
      return applyCloseHotel(state, action);
    }
    default : return state;
  }
}
export default rootReducer;