import { RECEIVE_DRINKS, RECEIVE_NEW_DRINK, REMOVE_DRINK } from '../actions/drink_actions';
  
  const DrinksReducer = (state = { all: {}, user: {}, new: undefined }, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
      case RECEIVE_DRINKS:
        newState.all = action.drinks.data;
        return newState;
      case RECEIVE_NEW_DRINK:
        newState.new = action.drink.data;
        return newState;
      case REMOVE_DRINK:
          delete newState[action.drinkId]
          return newState
      default:
        return state;
    }
  };
  
  export default DrinksReducer;