const bookshelf = require('../PostgresSql')

const Schools = bookshelf.Model.extend({
    tableName: 'schools',
    hasTimestamps: true,

})

module.exports=Contacts
