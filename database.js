'use strict';

const Sequelize = require('sequelize');
const router = require('express').Router();

const db = new Sequelize('web-prog', 'postgres', '1234', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false
});

const itemList = db.define('itemlist', {
    name: {
        type: Sequelize.STRING,
        unique: true
    },
    source: {
        type: Sequelize.STRING
    },
    category: {
        type: Sequelize.STRING
    },
    price: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    }
})

router.get('/', (req, res) => {
    itemList
        .findAll()
        .then(data => res.json({ data }))
        .catch(err => console.log(err))
});

router.post('/post-item', (req, res) => {
    console.log(req.body);
    itemList
        .create({
            name: req.body.name,
            source: req.body.source,
            category: req.body.category,
            price: req.body.price,
            description: req.body.description
        })
        .then(data => res.json({ data }))
        .catch(err => console.log(err));
});

module.exports = { db, router };