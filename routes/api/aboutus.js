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

router.patch(
    "/aboutus",
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      AboutUs.findByIdAndUpdate(req.params.aboutUsId, req.body, { new: true })
        .then(faq => res.json(faq))
        .catch(err => res.status(404).json({ nofaqfound: "No about us found" }))
    }
)

module.exports = router;