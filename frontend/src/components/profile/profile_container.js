import { connect } from 'react-redux';
// import { fetchUserTweets } from '../../actions/booking_actions';
import Profile from './profile';

const mapStateToProps = (state) => {
  return {
    bookings: Object.values(state.bookings.user),
    currentUser: state.session.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // fetchUserTweets: id => dispatch(fetchUserTweets(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);