const express = require('express');
const router = express.Router();
const passport = require('passport');
const Drink = require('../../models/Drink');

router.get('/', (req, res) => {
    Drink.find()
        .sort({ date_created: -1 })
        .then(drinks => res.json(drinks))
        .catch(err => res.status(404).json({ nodrinksfound: 'No faqs found' }));
});

router.get('/:id', (req, res) => {
    Drink.findById(req.params.id)
        .then(drink => res.json(drink))
        .catch(err =>
            res.status(404).json({ nodrinkfound: 'No drink found with that ID' })
        );
});

router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    const newDrink = new Drink({
      drink_name: req.body.drink_name,
      ingredients: req.body.ingredients,
      beverage_type: req.body.beverage_type,
      favorite: req.body.favorite,
    });
  
    newDrink.save().then(faq => res.json(faq));
    }
  );

router.patch(
    "/:drinkId",
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
  
      // const { errors, isValid } = validateAppointment(req.body)
      // if (!isValid) {
      //   return res.status(400).json(errors)
      // }
      Drink.findByIdAndUpdate(req.params.drinkId, req.body, { new: true })
        .then(drink => res.json(drink))
        .catch(err => res.status(404).json({ nodrinkfound: "No drink found by that id" }))
    }
)

router.delete(
  "/:drinkId",
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Drink.deleteOne({_id: req.params.drinkId})
      .then(() => res.status(200).json({ msg: "delete successful" }))
      .catch(err => res.status(404).json({ nodrinkfound: "No drink found by that Id" }))
    }
)

module.exports = router;