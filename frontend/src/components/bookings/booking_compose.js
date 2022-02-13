import React from 'react';
import BookingBox from './booking_box';
import qs from 'qs';
import { Linking } from 'react-native';

class BookingCompose extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        name: '',
        email: '',
        venue: '',
        package: '',
      }

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field) {
    return e => {this.setState({[field] : e.currentTarget.value})}
  }

  handleSubmit(e) {
    e.preventDefault();
    let booking = {
      name: this.state.name,
      email: this.state.email,
      venue: this.state.venue,
      package: this.state.package,
    };

    this.props.composebooking(booking); 
    sendEmail(
      this.state.email,
      `New booking request on ${this.state.date} at ${this.state.venue} from ${this.state.name}`,
      `Test body`
  ).then(() => {
      console.log('Your message was successfully sent!');
  });
    this.setState({
      name: '',
      email: '',
      venue: '',
      package: '',
    })
  }

  render() {
    return (
        <div>
          <h2>Make A Reservation</h2>
          <form className = "booking_form">
            <h4>Name</h4>
            <input type = "text" placeholder='Your name' onChange={this.handleChange('client_name')}></input>
            <h4>Email</h4>
            <input type = "text" placeholder='Best contact email' onChange={this.handleChange('client_email')}></input>
            <h4>Date</h4>
            <input type = "date" onChange={this.handleChange('date')}></input>
            <h4>Occasion</h4>
            <input type = "text" placeholder='Wedding' onChange={this.handleChange('event_type')}></input>
            <h4>Package</h4>
            <select value = {this.state.package} text-align-last = "center" onChange = {this.handleChange('package')}>
              <option value="" disabled defaultValue className = "appoinment-style-option">Select the package you'd like</option>
              <option value="The Standard" className = "appoinment-style-option">The Standard</option>
              <option value="The Mixer" className = "appoinment-style-option">The Mixer</option>
              <option value="The Boozy Bundle" className = "appoinment-style-option">The Boozy Bundle</option>
            </select>
            <h4>Number of Guests</h4>
            <input type = "text" placeholder='50' onChange={this.handleChange('num_guests')}></input>
            <h4>Venue Location</h4>
            <input type = "text" placeholder='Burbank' onChange={this.handleChange('venue')}></input>
            <h4>How did you hear about us?</h4>
            <input type = "text" placeholder='Instagram' onChange={this.handleChange('referral_source')}></input>
            <h4>Bar Budget</h4>
            <input type = "text" placeholder='$1000' onChange={this.handleChange('budget')}></input>
            <h4>Any questions/comments?</h4>
            <textarea placeholder='Let us know here!' rows = '10' cols = '30' onChange={this.handleChange('comments')}></textarea>
            <br/>
            <br/>
            <button onClick = {this.handleSubmit} className = "buttonforsignupform">Submit your reservation!</button>
          </form>
        </div>
    )
  }
}




export async function sendEmail(to, subject, body, options = {}) {
    const { cc, bcc } = options;

    let url = `mailto:${to}`;

    // Create email link query
    const query = qs.stringify({
        subject: subject,
        body: body,
        cc: cc,
        bcc: bcc
    });

    if (query.length) {
        url += `?${query}`;
    }

    // check if we can use this link
    const canOpen = await Linking.canOpenURL(url);

    if (!canOpen) {
        throw new Error('Provided URL can not be handled');
    }

    return Linking.openURL(url);
}

export default BookingCompose;