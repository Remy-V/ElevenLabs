const mongoose = require('mongoose');

const astronautSchema = new mongoose.Schema({
    firstname: { type: String },
    lastname: { type: String }
    }, 
    { collection : 'Astronaut' }
);

module.exports = mongoose.model('Astronaut', astronautSchema);
