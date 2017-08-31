let express = require('express');
let bodyParser = require('body-parser'); 
let mongoose = require('mongoose');

let calc = require('./routes/calc')
let emp = require('./routes/emp')

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/calc",calc);
app.use("/emp",emp);

app.listen(3000);
console.log('running')

module.exports = app;
