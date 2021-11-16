import express, { json } from 'express';
const app = express();
import cors from 'cors';
require('dotenv').config();
import router from './router.js';
import { connect, connection } from 'mongoose';

const PORT = process.env.PORT || 8080;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongodatabase";

connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true });
connection.once('open', function() {
	console.log("mongodb connected yo");
});

app.use(cors());
app.use(json());
import { initialize, session } from './passport';

app.use(initialize());
app.use(session());

app.use('/api', router);

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});