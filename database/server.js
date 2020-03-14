const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3001;
const app = express();
require('dotenv').config();
const router = require('./router.js');
const passport = require('./passport');

app.use(cors());
app.use(express.json());

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/scraper";
mongoose.connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true });
mongoose.connection.once('open', function() {
	console.log("mongodb connected yo");
});

app.use('/api', router);

require('./passport');

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});

// why do this
// module.exports = app;