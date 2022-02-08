const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Booking = require('../../models/Booking');
// const validateTweetInput = require('../../validation/tweets');

router.get('/', (req, res) => {
    Booking.find()
        .sort({ date_created: -1 })
        .then(bookings => res.json(bookings))
        .catch(err => res.status(404).json({ nobookingsfound: 'No bookings found' }));
});

router.get('/bookings/:email', (req, res) => {
    Tweet.find({user: req.params.email})
        .then(bookings => res.json(bookings))
        .catch(err =>
            res.status(404).json({ nobookingsfound: 'No bookings found from that user' }
        )
    );
});

router.get('/:id', (req, res) => {
    Booking.findById(req.params.id)
        .then(booking => res.json(booking))
        .catch(err =>
            res.status(404).json({ nobookingfound: 'No booking found with that ID' })
        );
});

router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      const { errors, isValid } = validateTweetInput(req.body);
  
      if (!isValid) {
        return res.status(400).json(errors);
      }
  
      const newBooking = new Booking({
        client_name: req.body.client_name,
        client_email: req.body.client_email,
        opened: req.body.opened
      });
  
      newBooking.save().then(tweet => res.json(tweet));
    }
  );

module.exports = router;