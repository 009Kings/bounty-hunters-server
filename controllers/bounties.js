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
ROUTER.get('/', (req, res) => {
    DB.Bounty.find()
    .then(bounties => {
        res.status(200).send(bounties)
    })
    .catch(err => {
        res.status(500).send({ message: 'Error hit at READ ALL BOUNTIES' })
    })
});
// GET '/:id' - read one bounty
ROUTER.get('/:id', (req, res) => {
    DB.Bounty.findById(req.params.id)
    .then(bounty => {
        res.send(bounty)
    })
    .catch(err => {
        console.log(err);
        res.status(503).send({ message: 'Service unavailable '});
    });
});
// PUT '/:id' - update one bounty
ROUTER.put('/:id', (req, res) => {
    console.log(req.body);
    DB.Bounty.findByIdAndUpdate(
        {_id: req.params.id},
        req.body,
        { new: true }
    )
    .then(updatedBounty => {
        res.send(updatedBounty);
    })
    .catch(err => {
        console.log(err);
        res.status(503).send({ message: 'Server problems, who dis?' });
    });
});
// DELETE '/:id' - delete one bounty
ROUTER.delete('/:id', (req, res) => {
    DB.Bounty.findByIdAndDelete(req.params.id)
    .then(() => {
        res.status(204).send({ message: 'We killed it' });
    })
    .catch(err => {
        console.log(err);
        res.status(500).send({ message: 'Internal server error' });
    });
});

module.exports = ROUTER;