
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dbConfig = require('./config');
const config = require('../src/config.json');
const path = require('path');
const express = require('express');
const app = express();
const astronautRoute = require('./routes/astronaut.route');

// mongoose.Promise = global.Promise;


// DB CONNECTION 
mongoose.connect(dbConfig.db).then(() =>{
    console.log("DB connection success");
}, (err) => {
    console.log("Something went wrong : " + err);
});


const port = process.env.PORT || config.port;
const server = app.listen(port, () => {
    console.log('Connected to port ' + port);
});



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(express.static('public'));
// app.use(express.static(path.join(__dirname, 'client/build')));

// ROUTING 
app.use('/', astronautRoute);

// 404 Error
app.use((req, res, next) => {
    console.log("404");
    res.status(404).send('Error 404!');
});

// 500 Error
app.use((err, req, res, next) => {
    console.log("500");
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});

