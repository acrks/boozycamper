import { connect } from 'react-redux';
import { composeBooking } from '../../actions/booking_actions';
import BookingCompose from './booking_compose';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
    newBooking: state.booking.new
  };
};

const mapDispatchToProps = dispatch => {
  return {
    composeBooking: data => dispatch(composeBooking(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingCompose);