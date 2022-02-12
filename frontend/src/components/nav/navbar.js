import React from 'react';
import { Link } from 'react-router-dom'
// import './navbar.css'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
      if (this.props.loggedIn) {
        return (
            <div>
                <Link to={'/booking'}>All Bookings</Link>
                <Link to={'/profile'}>Profile</Link>
                <Link to={'/new_booking'}>Write a Booking</Link>
                <button onClick={this.logoutUser}>Logout</button>
            </div>
        );
      } else {
        return (
            <div>
                <Link to={'/login'}>Login</Link>
                <Link to={'/drinks'}>Drinks</Link>
                <Link to={'/vendors'}>Vendors</Link>
            </div>
        );
      }
  }

  render() {
      return (
        <div>
            <h1>The Boozy Camper</h1>
            { this.getLinks() }
        </div>
      );
  }
}

export default NavBar;