
exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists('contacts', (table) => {
        table.increments('id').primary();
        table.string('userName').notNullable();
        table.string('age').notNullable();
        table.string('email').notNullable();
        table.string('phone').notNullable();
        table.string('language');
        table.string('comments').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());

    })
 };
 
 exports.down = function(knex, Promise) {
   return knex.schema.dropTable('contacts')
 };