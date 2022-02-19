import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok} from '@fortawesome/free-brands-svg-icons';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.main = React.createRef();
  }

  handleScroll = e => {
    e.preventDefault();
    const main = this.main.current;
    window.scrollTo({
      top: main.offsetTop,
      left: 0,
      behavior: "instant"
    });
  };

  logoutUser = e => {
      e.preventDefault();
      this.props.logout();
  }

  getSocialFA = () => {
    return (
      <div className = "fontAwesome">
        <a href = 'https://www.instagram.com/theboozycamper/' target= "_blank">
        <FontAwesomeIcon icon={faInstagram} className="fontAwesomeIcon"/>
        </a>
        <FontAwesomeIcon icon={faTiktok} className="fontAwesomeIcon" />
      </div>
    )
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks = () => {
      if (this.props.loggedIn) {
        return (
            <div>
                <Link to={'/bookings'}>All Bookings</Link>
                <Link to={'/profile'}>Profile</Link>
                <button onClick={this.logoutUser}>Logout</button>
            </div>
        );
      } else {
        return (
              <div className='tabs'>
                <Link to={'/login'}>Login</Link>
                <Link to={'/'}>Home</Link>
                <Link to={'/drinks'}>Drinks Menu</Link>
                <Link to={'reserve'}>Reserve The Boozy Camper</Link>
                <Link to={'/vendors'}>Vendors</Link>
                <Link to={'aboutus'}>Our Story</Link>
              </div>
        );
      }
  }

  render() {
      return (
        <div>
            { this.getSocialFA() }
            <Link to = "/" className = "header"><h1>The Boozy Camper</h1></Link>
            <h2 className='subheader'>Let the good times roll to you!</h2>
            { this.getLinks() }
        </div>
      );
  }
}

export default NavBar;