import * as DrinkAPIUtil from '../util/drink_api_util';

export const RECEIVE_DRINKS = "RECEIVE_DRINKS";
export const RECEIVE_NEW_DRINK = "RECEIVE_NEW_DRINK";
export const REMOVE_DRINK = "REMOVE_DRINK";

export const receiveDrinks = faqs => ({
  type: RECEIVE_DRINKS,
  faqs
});

export const receiveNewDrink = faq => ({
  type: RECEIVE_NEW_DRINK,
  faq
})

export const fetchDrinks = () => dispatch => (
  DrinkAPIUtil.getDrinks()
    .then(faqs => dispatch(receiveDrinks(faqs)))
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