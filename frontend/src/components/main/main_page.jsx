import React from 'react';
import NavBar from '../nav/navbar';

class MainPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      venue: '',
      package: '',
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(field) {
    return e => {this.setState({[field] : e.currentTarget.value})}
  }

  handleSubmit(e) {
    e.preventDefault()
  }

  render() {
    return (
      <div>
        <h1>Let the good times roll to you!</h1>
        <h2>Photos will go here</h2>
        <h2>Packages</h2>
        <h4>Camper Rental Starting at $425.00 per hour</h4>
        <h3>The Standard</h3>
        <h4>Fancy a glass of bubbly for your special occasion? This is the package for you.<br/>$3.00 per guest</h4>
        <h3>The Mixer</h3>
        <h4>Need more than just champagne? The Mixer Package has you covered!<br/>We pour Prosecco + Sangria + Beer (or any type type of wine)<br/>Choose up to 4 drinks from our menu<br/>$5.50 per guest</h4>
        <h3>The Boozy Bundle</h3>
        <h4>Our signature package! Choose two signature cocktails, two types of wine, and two types of beer from our incredible selection<br/>$7.50 per guest</h4>
        <h2>Frequently Asked Questions</h2>
        <h4>What's included?</h4>
        <p>2 Certified Bartenders<br/>1 Bar Back<br/>50 Miles from (insert city here?)<br/>$2.50 per additional mile<br/>4 hours of service<br/>Lounge Area*<br/>Florals<br/>Water Cooler Station<br/>Pre-selected Camper Cocktail Menu<br/>Full Bar Services<br/>Insurance (In case of spills)</p>
        <h4>Who provides the alcohol?</h4>
        <p>As of this moment, you may choose the client provides the alcohol. A full selection can be found on the 'Drinks' tab</p>
        <p>You found this question! Can the client buy their own alcohol for Boozy Camper to serve?</p>
        <h4>What dinnerware/decorations are included?</h4>
        <p>Plastic Glassware, Napkins, Ice, Fruit, and Juice</p>
        <form>
        <h2>Reservations</h2>
        <h4>Name</h4>
        <input type = "text" placeholder='Your name'></input>
        <h4>Email</h4>
        <input type = "text" placeholder='Best contact email'></input>
        <h4>Date</h4>
        <input type = "date"></input>
        <h4>Occasion</h4>
        <input type = "text" placeholder='Wedding'></input>
        <h4>Package</h4>
        <select value = {this.state.package} text-align-last = "center" onChange = {this.handleChange('package')}>
          <option value="" disabled defaultValue className = "appoinment-style-option">Select the package you'd like</option>
          <option value="The Standard" className = "appoinment-style-option">The Standard</option>
          <option value="The Mixer" className = "appoinment-style-option">The Mixer</option>
          <option value="The Boozy Bundle" className = "appoinment-style-option">The Boozy Bundle</option>
        </select>
        <h4>Number of Guests</h4>
        <input type = "text" placeholder='50'></input>
        <h4>Venue Location</h4>
        <input type = "text" placeholder='Burbank'></input>
        <h4>How did you hear about us?</h4>
        <input type = "text" placeholder='Instagram'></input>
        <h4>Bar Budget</h4>
        <input type = "text" placeholder='$1000'></input>
        <h4>Any questions/comments?</h4>
        <textarea placeholder='Let us know here!' rows = '10' cols = '30'></textarea>
        <br/>
        <button onClick = {this.handleSubmit} className = "buttonforsignupform">Submit your reservation!</button>
        </form>                   

        <br/>
        <br/>
        <footer>
          Copyright &copy; 2022 BoozyCamper
        </footer>
      </div>
    );
  }
}

export default MainPage;