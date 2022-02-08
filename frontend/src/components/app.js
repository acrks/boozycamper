import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';

import BookingsContainer from './bookings/bookings_container';

import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import ProfileContainer from './profile/profile_container';
import BookingComposeContainer from './bookings/bookings_compose_container';

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
        <AuthRoute exact path="/" component={MainPage} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
    
        <ProtectedRoute exact path="/bookings" component={BookingsContainer} />
        <ProtectedRoute exact path="/profile" component={ProfileContainer} />
        <ProtectedRoute exact path="/new_booking" component={BookingComposeContainer} />
    </Switch>
  </div>
);

export default App;