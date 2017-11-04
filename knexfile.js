// Update with your config settings.
require('dotenv').config()
const environment = process.env.NODE_ENV || 'development'
module.exports = {

  development: {
    client: 'pg',
    connection: {
     database: 'reddit-clone',
     host: 'localhost'
    }
  },


  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL
  
  }

}
