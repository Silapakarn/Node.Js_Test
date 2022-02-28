const express = require('express');
const chalk = require('chalk')
const debug = require("debug")("appNode")
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4000;


app.use(morgan('combined'));
app.use(express.static(path.join(_dirname, "/Public/")));

app.get("/", (req, res) => {
    res.render('index', { username: 'Silapakan', customer: ["Kan", "Kon", "Jon"] });
})

app.listen(PORT, () => {
    debug("Listening on Port", chalk.green(" : " + PORT));
})

app.set("views", "./SRC/views");
app.set("view engine", "ejs")

app.get("/", (req, res) => {})