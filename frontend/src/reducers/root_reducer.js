import { combineReducers } from 'redux';
import errors from './errors_reducer'
import session from './session_api_reducer';
import bookings from './bookings_reducer';

const RootReducer = combineReducers({
  session,
  errors,
  bookings,
});

export default RootReducer;