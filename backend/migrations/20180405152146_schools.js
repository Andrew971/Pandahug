
exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists('schools', (table) => {
        table.increments('id').primary();

      //create your column here

        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());

    })
 };

 exports.down = function(knex, Promise) {
   return knex.schema.dropTable('schools')
 };
