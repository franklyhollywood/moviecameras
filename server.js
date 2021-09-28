require('dotenv').config();
//Import the express library:
const express = require('express');
//import my moviecameras data
const { moviecameras } = require('./data.js');

const app = express();

const cors = require('cors');

app.use(cors());

app.get('/moviecameras', (req, res) => {
    // "talking back" -- sending a response back to whoever is calling
res.json(moviecameras);

})

app.get('/moviecameras/:id', (req, res) => {
        const matchingmoviecamera = moviecameras.find(camera => camera.id === Number(req.params.id));
        res.json(matchingmoviecamera);
});

module.exports = { app }