const express = require('express');
const router = express.Router();
const passport = require('passport');
const Package = require('../../models/Package');

router.get('/', (req, res) => {
    Package.find()
        .sort({ date_created: -1 })
        .then(packages => res.json(packages))
        .catch(err => res.status(404).json({ nopackagesfound: 'No packages found' }));
});

router.get('/:id', (req, res) => {
    Package.findById(req.params.id)
        .then(package => res.json(package))
        .catch(err =>
            res.status(404).json({ nopackagefound: 'No package found with that ID' })
        );
});

router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    const newPackage = new Package({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
    });
  
    newPackage.save().then(faq => res.json(faq));
    }
  );

router.patch(
    "/:packageId",
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      Package.findByIdAndUpdate(req.params.packageId, req.body, { new: true })
        .then(faq => res.json(faq))
        .catch(err => res.status(404).json({ nopackagefound: "No package found by that id" }))
    }
)

router.delete(
  "/:packageId",
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Package.deleteOne({_id: req.params.packageId})
      .then(() => res.status(200).json({ msg: "delete successful" }))
      .catch(err => res.status(404).json({ nopackagefound: "No package found by that Id" }))
    }
)

module.exports = router;