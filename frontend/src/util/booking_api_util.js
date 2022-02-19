import axios from 'axios';

export const getBookings = () => {
  return axios.get('/api/bookings/')
};

export const writeBooking = data => {
  return axios.post('/api/bookings/', data)
}