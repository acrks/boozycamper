import { connect } from 'react-redux';
import { fetchDrinks, composeDrink, updateDrink, deleteDrink } from '../../actions/drink_actions';
import Drinks from './drinks_admin';

const mapStateToProps = (state) => {
  return {
    drinks: Object.values(state.drinks.all)
  };
};

const mapDispatchToProps = dispatch => ({
    fetchDrinks: () => dispatch(fetchDrinks()),
    composeDrink: (drink) => dispatch(composeDrink(drink)),
    updateDrink: (drink) => dispatch(updateDrink(drink)),
    deleteDrink: (drinkId) => dispatch(deleteDrink(drinkId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Drinks);