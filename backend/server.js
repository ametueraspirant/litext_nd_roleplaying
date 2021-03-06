const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const router = require('./router.js');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 8080;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongodatabase";

mongoose.connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true });
mongoose.connection.once('open', function() {
	console.log("mongodb connected yo");
});

app.use(cors());
app.use(express.json());
const passport = require('./passport');

app.use(passport.initialize());
app.use(passport.session());

app.use('/api', router);

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});