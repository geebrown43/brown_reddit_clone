const db = require('./connection')

getAllUsers = () => {
    return db.select('*').from('users')
}

createUser = (data) => {
    return db('users').insert(data)
}


module.exports = {
    getAllUsers,
    createUser
}