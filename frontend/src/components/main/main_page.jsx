import React from 'react';
import BookingForm from '../bookings/booking_compose'
import Packages from '../packages/packages_container'
import FAQs from '../faqs/faqs_container'
import HeroElement from '../hero/hero_element'
import AboutUs from '../aboutus/aboutus_container'


class MainPage extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div>
        <HeroElement />
        <AboutUs 
        mainPage = {true}/>
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