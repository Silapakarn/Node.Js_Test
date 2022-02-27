const express = require('express');
const chalk = require('chalk')
const debug = require("debug")("appNode")
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = 3000;


app.use(morgan('combined'));
app.use(express.static(path.join(_dirname, "/Public/")));

app.get("/", (req, res) => {
    res.send('Hello Silapakan Saniskosai');
})

app.listen(port, () => {
    debug("Listening on Port", chalk.green(" : " + port));
})