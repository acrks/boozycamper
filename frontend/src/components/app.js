import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import AboutUs from './aboutus/aboutus_container';
import BookingForm from './bookings/booking_compose';
import Packages from './packages/packages_container';
import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import ProfileContainer from './profile/profile_container';
import BookingsContainer from './bookings/bookings_container';
import FAQsContainer from './faqs/faqs_container';
import FAQsAdminContainer from './faqs/faqs_admin_container';
import DrinksContainer from './drinks/drinks_container';
import DrinksAdminContainer from './drinks/drinks_admin_container';
import AboutUsAdminContainer from './aboutus/aboutus_admin_container';
import PackagesAdminContainer from './packages/packages_admin_container';

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
        <Route exact path="/" component={MainPage} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/faqs" component={FAQsContainer} />
        <AuthRoute exact path="/drinks" component={DrinksContainer} />
        <AuthRoute exact path="/aboutus" component={AboutUs} />
        <AuthRoute exact path="/packages" component={Packages} />
        <Route exact path = "/reserve" component={BookingForm} />
        <ProtectedRoute exact path="/bookings" component={BookingsContainer} />
        <ProtectedRoute exact path="/faqs_admin" component={FAQsAdminContainer} />
        <ProtectedRoute exact path="/drinks_admin" component={DrinksAdminContainer} />
        <ProtectedRoute exact path="/aboutus_admin" component={AboutUsAdminContainer} />
        <ProtectedRoute exact path="/packages_admin" component={PackagesAdminContainer} />
        <ProtectedRoute exact path="/profile" component={ProfileContainer} />
    </Switch>
  </div>
);

export default App;