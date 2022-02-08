import { RECEIVE_BOOKINGS, RECEIVE_NEW_BOOKING } from '../actions/booking_actions';
  
  const BookingsReducer = (state = { all: {}, user: {}, new: undefined }, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
      case RECEIVE_BOOKINGS:
        newState.all = action.bookings.data;
        return newState;
      case RECEIVE_NEW_BOOKING:
        newState.new = action.booking.data
        return newState;
      default:
        return state;
    }
  };
  
  export default BookingsReducer;