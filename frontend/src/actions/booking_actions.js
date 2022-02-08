import { getBookings, writeBooking } from '../util/booking_api_util';

export const RECEIVE_BOOKINGS = "RECEIVE_TWEETS";
export const RECEIVE_NEW_BOOKING = "RECEIVE_NEW_TWEET";

export const receiveBookings = tweets => ({
  type: RECEIVE_BOOKINGS,
  tweets
});

export const receiveNewBooking = booking => ({
  type: RECEIVE_NEW_BOOKING,
  booking
})

export const fetchBookings = () => dispatch => (
  getBookings()
    .then(bookings => dispatch(receiveBookings(bookings)))
    .catch(err => console.log(err))
);

export const composeBooking = data => dispatch => (
  writeBooking(data)
    .then(tweet => dispatch(receiveNewBooking(tweet)))
    .catch(err => console.log(err))
);