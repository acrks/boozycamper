import { RECEIVE_FAQS, RECEIVE_NEW_FAQ } from '../actions/faq_actions';
  
  const FAQsReducer = (state = { all: {}, user: {}, new: undefined }, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
      case RECEIVE_FAQS:
        newState.all = action.faqs.data;
        return newState;
      case RECEIVE_NEW_FAQ:
        newState.new = action.faq.data;
        return newState;
      default:
        return state;
    }
  };
  
  export default FAQsReducer;