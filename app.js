const express = require('express')
const db = require('./db/query')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 3000
const routing = require('./routes/routing')

app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('public'))
app.use('/',routing)


app.get('/api/redditusers', (req, res) => {
    db.getAllUsers(req.body)
    .then((users) => res.json(users))
})
app.get('/api/redditusers/link', (req, res) => {
    db.getAllLinks(req.body)
    .then((links) => res.json(links))
})
app.post('/api/redditusers', (req, res, next) => {
    let data = {
        username: req.body.username,
        email: req.body.email
    }
    db.createUser(req.body)
    .then(user => res.render('myprofile.hbs', data))
    console.log(data.username)

})
app.post('/api/redditusers/link', (req, res) => {
    db.createLink(req.body)
    .then(link => res.sendStatus(201).json(link))
})

app.listen(port, () => {
    console.log('listening on port:' + port)
})

