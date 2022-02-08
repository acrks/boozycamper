import React from 'react';
import BookingBox from './booking_box';

class BookingCompose extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          text: "",
          newBooking: ""
      }

      this.handleSubmit = this.handleSubmit.bind(this);
  } 

  componentWillReceiveProps(nextProps) {
      this.setState({newBooking: nextProps.newBooking.text});
  }

  handleSubmit(e) {
    e.preventDefault();
    let booking = {
      text: this.state.text
    };

    this.props.composebooking(booking); 
    this.setState({text: ''})
  }

  update() {
    return e => this.setState({
      text: e.currentTarget.value
    });
  }

  render() {
    return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input type="textarea"
                        value={this.state.text}
                        onChange={this.update()}
                        placeholder="Write your booking..."
                    />
                    <input type="submit" value="Submit" />
                </div>
            </form>
            <br />
            <BookingBox text={this.state.newBooking} />
        </div>
    )
  }
}

export default BookingCompose;