import * as DrinkAPIUtil from '../util/drink_api_util';

export const RECEIVE_DRINKS = "RECEIVE_DRINKS";
export const RECEIVE_NEW_DRINK = "RECEIVE_NEW_DRINK";
export const REMOVE_DRINK = "REMOVE_DRINK";

export const receiveDrinks = drinks => ({
  type: RECEIVE_DRINKS,
  drinks
});

export const receiveNewDrink = drink => ({
  type: RECEIVE_NEW_DRINK,
  drink
})

export const fetchDrinks = () => dispatch => (
  DrinkAPIUtil.getDrinks()
    .then(drinks => dispatch(receiveDrinks(drinks)))
    .catch(err => console.log(err))
);

export const composeDrink = data => dispatch => (
  DrinkAPIUtil.writeDrink(data)
    .then(faq => dispatch(receiveNewDrink(faq)))
    .catch(err => console.log(err))
);

export const updateDrink = drink => dispatch => (
  DrinkAPIUtil.updateDrink(drink)
    .then(
      drink => dispatch(updateDrink(drink)),
      err => console.log(err)
    )
)

export const removeDrink = drinkId => {
  return {
    type: REMOVE_DRINK,
    drinkId
  }
}

export const deleteDrink = drinkId => dispatch => (
  DrinkAPIUtil.deleteDrink(drinkId)
    .then(
      () => dispatch(removeDrink(drinkId)),
      err => console.log(err)
    )
);