const db = require('./connection')

getAllUsers = () => {
    return db.select('*').from('users')
}

getAllLinks = () => {
    return db.select('*').from('links')
}

getUserByUserNameandPassword = (email, password) => {
    return db('users').where({
       email: email,
       password: password
    })
}
createUser = (data) => {
    return db('users').insert(data)
}

createLink = (data) => {
    return db('links').insert(data)
}
    
module.exports = {
    getAllUsers,
    createUser,
    createLink,
    getAllLinks,
    getUserByUserNameandPassword
}