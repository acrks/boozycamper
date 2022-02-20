import { combineReducers } from 'redux';
import errors from './errors_reducer'
import session from './session_api_reducer';
import bookings from './bookings_reducer';
import faqs from './faqs_reducer';

const RootReducer = combineReducers({
  session,
  errors,
  bookings,
  faqs,
});

export default RootReducer;