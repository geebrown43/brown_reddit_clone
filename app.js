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
app.post('/api/redditusers', (req, res, next) => {
    db.createUser(req.body)
    .then(user => res.render('myprofile.hbs'))
})

app.listen(port, () => {
    console.log('listening on port:' + port)
})

