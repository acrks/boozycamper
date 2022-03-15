const express = require('express');
const router = express.Router();
const passport = require('passport');
const FAQ = require('../../models/FAQ');

router.get('/', (req, res) => {
    FAQ.find()
        .sort({ date_created: -1 })
        .then(faqs => res.json(faqs))
        .catch(err => res.status(404).json({ nofaqsfound: 'No faqs found' }));
});

router.get('/:id', (req, res) => {
    FAQ.findById(req.params.id)
        .then(faq => res.json(faq))
        .catch(err =>
            res.status(404).json({ nofaqfound: 'No faq found with that ID' })
        );
});

router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    const newFAQ = new FAQ({
      question: req.body.question,
      answer: req.body.answer,
    });
  
    newFAQ.save().then(faq => res.json(faq));
    }
  );

router.patch(
    "/:faqId",
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
  
      // const { errors, isValid } = validateAppointment(req.body)
      // if (!isValid) {
      //   return res.status(400).json(errors)
      // }
      FAQ.findByIdAndUpdate(req.params.faqId, req.body, { new: true })
        .then(faq => res.json(faq))
        .catch(err => res.status(404).json({ nofaqfound: "No faq found by that id" }))
    }
)

router.delete(
  "/:faqId",
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    FAQ.deleteOne({_id: req.params.faqId})
      .then(() => res.status(200).json({ msg: "delete successful" }))
      .catch(err => res.status(404).json({ nofaqfound: "No faq found by that Id" }))
    }
)

module.exports = router;