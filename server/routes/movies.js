"use strict";
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
const filePath = path.join(directoryPath, 'movie_metadata.json');

// Read the JSON file, parse the data, store in constant
const jsonData = fs.readFileSync(filePath, 'utf8');
const parsedData = JSON.parse(jsonData);
const movies = parsedData;

//console.log(movies);

module.exports = router;

router
    .route("/")
    .get((req, res) => {
        res.status(200).send({
            movies
        });
    });

router  
    .route("/:title")
    .get((req, res) => {
        const { id } = req.params;
        const { logo } = req.body;

        if (!logo) {
            res.status(418).send({message: 'we need a logo!'});
        } else {
            res.send({
                tshirt: `tshit with your ${logo} and ID of ${id}`
            });
        }
    });