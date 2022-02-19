const express = require('express');
const router = express.Router();
const passport = require('passport');
const Booking = require('../../models/Booking');
const validateBookingInput = require('../../validation/bookings');

router.get('/', (req, res) => {
    Booking.find()
        .sort({ date_created: -1 })
        .then(bookings => res.json(bookings))
        .catch(err => res.status(404).json({ nobookingsfound: 'No bookings found' }));
});

router.get('/bookings/:email', (req, res) => {
    Booking.find({user: req.params.email})
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

router.post('/', (req, res) => {
      const { errors, isValid } = validateBookingInput(req.body);
  
      if (!isValid) {
        return res.status(400).json(errors);
      }
  
      const newBooking = new Booking({
        client_name: req.body.client_name,
        client_email: req.body.client_email,
        date: req.body.date,
        booking_duration: req.body.booking_duration,
        event_type: req.body.occasion,
        num_guests: req.body.guests,
        venue_city: req.body.venue_city,
        venue_name: req.body.venue_name,
        bar_budget: req.body.bar_budget,
        referral_source: req.body.referral_source,
        package: req.body.package,
        comments: req.body.comments,
      });
  
      newBooking.save().then(booking => res.json(booking));
    }
  );

module.exports = router;