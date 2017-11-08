const express = require('express')
const router = express.Router();
const db = require('../db/query')


router.get('/', (req, res) => {
    res.render('index')
    
})

router.get('/create.hbs', (req, res) => {
    res.render('create')
})


router.get('/login.hbs', (req, res) => {
    res.render('login')
})

router.get('/api/myprofile.hbs', (req, res) => {
    console.log(req.body)
    res.render('myprofile')
    
})

router.get('/api/login.hbs', (req, res) => {
    res.render('login')
})


module.exports = router