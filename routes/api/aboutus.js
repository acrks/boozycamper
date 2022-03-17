const express = require('express');
const router = express.Router();
const passport = require('passport');
const AboutUs = require('../../models/AboutUs');

router.get('/', (req, res) => {
    AboutUs.find()
        .sort({ date_created: -1 })
        .then(aboutus => res.json(aboutus))
        .catch(err => res.status(404).json({ noaboutusfound: 'No aboutus found' }));
});

router.get('/:id', (req, res) => {
    AboutUs.findById(req.params.id)
        .then(aboutus => res.json(aboutus))
        .catch(err =>
            res.status(404).json({ noaboutusfound: 'No about us found with that ID' })
        );
});

router.patch(
    "/:aboutUsId",
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      AboutUs.findByIdAndUpdate(req.params.aboutUsId, req.body, { new: true })
        .then(aboutus => res.json(aboutus))
        .catch(err => res.status(404).json({ noaboutusfound: "No about us found" }))
    }
)

module.exports = router;