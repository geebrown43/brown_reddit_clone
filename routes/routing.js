const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/create.hbs', (req, res) => {
    res.render('create')
})

router.get('/index.hbs', (req, res) => {
    res.render('index')
})

router.get('/login.hbs', (req, res) => {
    res.render('login')
})

module.exports = router