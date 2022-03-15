import React from 'react';
import BookingForm from '../bookings/booking_compose'
import Packages from '../packages/packages'
import FAQs from '../faqs/faqs_container'
import HeroElement from '../hero/hero_element'

class MainPage extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div>
        <HeroElement />
        <FAQs />
        <Packages />
        <BookingForm />
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