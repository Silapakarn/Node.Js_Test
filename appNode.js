const express = require('express');
const chalk = require('chalk')
const debug = require("debug")("appNode")
const app = express();
const morgan = require('morgan');
const port = 3000;


app.use(morgan('combined'));

app.get("/", (req, res) => {
    res.send('Hello Silapakan');
})

app.listen(port, () => {
    debug("Listening on Port", chalk.green(" : " + port));
})