import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok} from '@fortawesome/free-brands-svg-icons';

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
                <button onClick={this.logoutUser}>Logout</button>
            </div>
        );
      } else {
        return (
            <div className='tabs'>
                <Link to={'/login'}>Login</Link>
                <Link to={'/drinks'}>Drinks Menu</Link>
                <Link to={'/vendors'}>Vendors</Link>
            </div>
        );
      }
  }

  render() {
      return (
        <div>
            <FontAwesomeIcon icon={faInstagram} className="fontAwesome" />
            <FontAwesomeIcon icon={faTiktok} className="fontAwesome" />
            <h1 className='header'>The Boozy Camper</h1>
            <h2 className='subheader'>Let the good times roll to you!</h2>
            { this.getLinks() }
        </div>
      );
  }
}

export default NavBar;