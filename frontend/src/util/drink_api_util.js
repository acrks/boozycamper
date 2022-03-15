import axios from 'axios';

export const getDrinks = () => {
  return axios.get('/api/drinks/')
};

export const writeDrink = data => {
  return axios.post('/api/drinks/', data)
}

export const updateDrink = (drink) => {
  return axios.patch(`/api/drinks/${drink.id}`, drink)
}

export const deleteDrink = (drinkId) => {
  return axios.delete(`/api/drinks/${drinkId}`)
}