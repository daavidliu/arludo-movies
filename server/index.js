const PORT = 5001;
const express = require('express');
const app = express();
const movies = require("./routes/movies");
app.use(express.json());

app.listen(PORT, () => console.log("SERVER STARTED!\nLISTENING ON PORT: " + PORT));

// use routes/tshirt.js to handle the route
app.use('/movies', movies);

