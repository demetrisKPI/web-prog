'use strict';

const Sequelize = require('sequelize');
const router = require('express').Router();

const db = new Sequelize('webprog', 'postgresuser', '1234', {
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

// router.post('/post-item', (req, res) => {
//     db
//         .create({
//             name: req.body.name,
//             state: req.body.state ? req.body.state : 'Start'
//         })
//         .then(data => {
//             States
//             .create({
//                 name: req.body.name,
//                 user: 'There is no user yet',
//                 state: 'Start', action: 'Created',
//                 managed: 'Manager/Admin'
//             })
//             .then(state => res.json({ data, state }))
//             .catch(err => console.log(err));
//         })
//         .catch(err => console.log(err));
// });

module.exports = { db, router };