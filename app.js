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


app.get('/api/redditusers/user/:email,:password', (req, res) => {
    const email = req.params.email
    const password = req.params.password
    console.log(req.params)
    db.getUserByUserNameandPassword(email, password)
    .then((users) => res.json(users))
    .catch(err => res.json(err))
})

app.get('/api/redditusers/link', (req, res) => {
    db.getAllLinks(req.body)
    .then((links) => res.render('myprofile.hbs',data))
})

app.post('/api/redditusers', (req, res, next) => {
    db.createUser(req.body)
    .then(user => res.redirect('login.hbs'))
    

})
app.post('/api/redditusers/link', (req, res) => {
    let data = {
        name: req.body.name,
        link: req.body.link,
        votes: req.body.votes
    }
    db.createLink(req.body)
    .then(link => res.render('myprofile.hbs', data))
})

app.listen(port, () => {
    console.log('listening on port:' + port)
})

