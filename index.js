'use strict';

const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const db = require('./database').db;

app.use(bodyParser.json());

db
    .authenticate()
    .then(() => {
        console.log('Database connected');
        db.sync().then(() => console.log('Database synchronized'));
    })
    .catch(err => console.log(err));


app.use('/itemlist', require('./database').router);

app.use(express.static('client/build'));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
})


app.listen(3000, function () {
  	console.log('Example app listening on port 3000!');
});