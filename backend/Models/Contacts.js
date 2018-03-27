const bookshelf = require('../PostgresSql')

const Contacts = bookshelf.Model.extend({
    tableName: 'contacts',
    hasTimestamps: true,

})

module.exports=Contacts