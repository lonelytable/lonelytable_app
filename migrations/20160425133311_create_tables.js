
exports.up = function(knex, Promise) {
  return knex.schema.createTable('tables', t=>{
    t.increments(),
    t.integer('venue_id').unsigned().index().references('venues.id').notNullable(),
    t.text('table_name'),
    t.integer('cost'),
    t.integer('maxCapacity'),
    t.text('description'),
    t.text('table_status'),
    t.integer('reviews'),
    t.integer('stars')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tables');
};
