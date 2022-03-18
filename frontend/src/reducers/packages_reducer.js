import { RECEIVE_PACKAGES, RECEIVE_NEW_PACKAGE, REMOVE_PACKAGE } from '../actions/package_actions';
  
  const PackagesReducer = (state = { all: {}, user: {}, new: undefined }, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
      case RECEIVE_PACKAGES:
        newState.all = action.drinks.data;
        return newState;
      case RECEIVE_NEW_PACKAGE:
        newState.new = action.drink.data;
        return newState;
      case REMOVE_PACKAGE:
          delete newState[action.drinkId]
          return newState
      default:
        return state;
    }
  };
  
  export default PackagesReducer;