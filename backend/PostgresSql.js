


const knex = require('knex')({
    client: 'pg',
    connection: {
      database: 'pandas',
      user:     'moon',
      password: ''
  }
})

const bookshelf = require('bookshelf')(knex)


module.exports = bookshelf