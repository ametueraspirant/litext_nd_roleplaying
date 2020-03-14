const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const router = require('./router.js');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongodatabase";

mongoose.connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true });
mongoose.connection.once('open', function() {
	console.log("mongodb connected yo");
});

app.use(cors());
app.use(express.json());
app.use('/api', router);
require('./passport');

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});