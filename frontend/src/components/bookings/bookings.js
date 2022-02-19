import React from 'react';
import { withRouter } from 'react-router-dom';
import BookingBox from './booking_box';

class Booking extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bookings: []
    }
  }

  componentWillMount() {
    this.props.fetchBookings();
  }

  componentWillReceiveProps(newState) {
    this.setState({ bookings: newState.bookings });
  }

  render() {
    if (this.state.bookings.length === 0) {
      return (<div>There are no Bookings</div>)
    } else {
      return (
        <div>
          <h2>All Bookings</h2>
          {this.state.bookings.map(booking => (
            <BookingBox key={booking._id} />
          ))}
        </div>
      );
    }
  }
}

export default withRouter(Booking);