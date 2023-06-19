// require express and file from /routes
const express = require('express');
const app = express();
const movies = require("./routes/movies");
app.use(express.json());

// run server on PORT 5001
const PORT = 5001;
app.listen(PORT, () => console.log("SERVER STARTED!\nLISTENING ON PORT: " + PORT));

// use routes/movies.js to handle the route
app.use('/movies', movies);

