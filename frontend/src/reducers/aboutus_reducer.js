import { RECEIVE_ABOUT_US_ALL, RECEIVE_ABOUT_US } from '../actions/aboutus_actions';
  
  const AboutUsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
      case RECEIVE_ABOUT_US_ALL:
        return action.aboutus.data;
      case RECEIVE_ABOUT_US:
        return action.aboutus.data;
      default:
        return newState;
    }
  };
  
  export default AboutUsReducer;