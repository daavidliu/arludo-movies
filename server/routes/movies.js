"use strict"; // stric syntax 
const express = require('express');
let router = express.Router();

// middleware that logs to console, helps with debugging 
router.use(function(req, res, next) {
    console.log("/movies"+req.url, "@", Date.now());
    next();
}); 

// read .json file
const fs = require('fs');
const path = require('path');

// Construct the path to the file
const directoryPath = path.join(__dirname, '../data');
const filePath1 = path.join(directoryPath, 'movie_metadata.json');
const filePath2 = path.join(directoryPath, 'theater_showtimes.json');

// Read the JSON file, parse the data, store in constant
const jsonData = fs.readFileSync(filePath1, 'utf8');
const parsedData = JSON.parse(jsonData);
const movies = parsedData;

const jsonData2 = fs.readFileSync(filePath2, 'utf8');
const parsedData2 = JSON.parse(jsonData2);
const showtimes = parsedData2;

module.exports = router;

router
    .route("/")
    .get((req, res) => {
        res.status(200).send({
            movies,
            showtimes
        });
    });