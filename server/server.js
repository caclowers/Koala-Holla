const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');
const koalaRouter = require('./routes/koala.router.js');
const databaseUrl = process.env.MONGODB_URI || `mongodb://localhost:27017/koalaholla`;

mongoose.connect(databaseUrl);

mongoose.connection.on('connected', () => {
  console.log(`mongoose connected to ${databaseUrl}`);
});

mongoose.connection.on('error', (error) => {
  console.log(`mongoose connection error ${error}`);
});

app.use(express.static('server/public'));
// Configure body-parser for Angular and jQuery
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // This line is required for Angular

app.use('/koala', koalaRouter);

app.listen(PORT, () => {
  console.log('listening on port', PORT);
});
