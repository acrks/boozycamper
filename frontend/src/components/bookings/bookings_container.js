import { connect } from 'react-redux';
import { fetchBookings } from '../../actions/booking_actions';
import Bookings from './bookings';

const mapStateToProps = (state) => {
  return {
    bookings: Object.values(state.bookings.all)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBookings: () => dispatch(fetchBookings())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Bookings);