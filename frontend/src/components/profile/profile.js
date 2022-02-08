import React from 'react';
import BookingBox from '../bookings/booking_box';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tweets: []
        }
    }
    
    componentWillMount() {
        console.log(this.props.currentUser.id)
    }

    componentWillReceiveProps(newState) {
        this.setState({ bookings: newState.bookings });
    }   
    
    render() {
        if (this.state.bookings.length === 0) {
          return (<div>No bookings to display</div>)
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

export default Profile;