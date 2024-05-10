const router = require('./router');
const express = require('express');
const app = express();
var cors = require('cors')

app.use(cors())
app.use(express.json());
app.use(router);

module.exports = app
