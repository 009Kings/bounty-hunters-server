// dependencies
const DB = require('../models');
const ROUTER = require('express').Router();

// POST '/' - create one bounty
ROUTER.post('/', (req, res) => {
    DB.Bounty.create(req.body)
    .then(newBounty => {
        res.status(201).send(newBounty);
    })
    .catch(err => {
        console.log(err);
        res.status(500).send({ message: 'Internal Server Error' });
    })
});



// GET '/' - read all bounties


// GET '/:id' - read one bounty



// PUT '/:id' - update one bounty


// DELETE '/:id' - delete one bounty



module.exports = ROUTER;