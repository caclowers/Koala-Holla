const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');

const koalaRouter = require('./routes/koala.router.js');

const databaseUrl = `mongodb://localhost:27017/koalaholla`;
mongoose.connect(databaseUrl);

mongoose.connection.on('connected', () => {
  console.log(`mongoose connected to ${databaseUrl}`);
  
});

mongoose.connection.on('error', (error) => {
  console.log(`mongoose connection error ${error}`);
  
});

// Configure body-parser for Angular and jQuery
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // This line is required for Angular

// Routes
// Should these be in a router?
app.use('/koala', koalaRouter);

// Static files
app.use(express.static('server/public'));

// Start listening for requests on a specific port
app.listen(PORT, () => {
  console.log('listening on port', PORT);
});
