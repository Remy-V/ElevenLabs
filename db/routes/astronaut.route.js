const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const astronautSchema = require('../models/Astronaut');


// REQUEST POST CREATE ASTRONAUT

router.get("/", (req, res, next) => {
    astronautSchema.find()
    .then((data) => {
        if (data) { return res.json(data); }
        return next("Error while fetching astronauts");
    })
});

// ASTRONAUT ACTION : CREATE 

router.post("/create-astronaut", (req, res, next) => {
    astronautSchema.create(req.body)
    .then((data) => {
        if (data) { return res.json(data); } 
        return next("Error while creating an astronaut");
    });
}); 

// ASTRONAUT ACTION : RETRIEVE ALL

router.get("/astronaut-list", (req, res, next) => {
    astronautSchema.find()
    .then((data) => {
        if (data) { return res.json(data); }
        return next("Error while retrieving all astronauts");
    })
})

// ASTRONAUT ACTION : RETRIEVE ONE

router.get("/edit-astronaut/:id", (req, res, next) => {
    astronautSchema.findById(req.params.id)
    .then((data) => {
        if (data) { return res.json(data); }
        return next("Error while retrieving this astronaut");
    });
});


// ASTRONAUT ACTION : EDIT

router.put("/edit-astronaut/:id", (req, res, next) => {
    astronautSchema.findByIdAndUpdate(req.params.id, { $set: req.body })
    .then((data) => {
        if (data) { return res.json(data) }
        return next("Error while updating this astronaut");
    });
}); 

// ASTRONAUT ACTION : REMOVE

router.delete("/delete-astronaut/:id", (req, res, next) => {
    astronautSchema.findByIdAndRemove(req.params.id)
    .then((data) => { 
        if (data) {return res.status(200).json({ msg: data })}
        return next("Error while deleting this astronaut");
        
    });
});

module.exports = router;