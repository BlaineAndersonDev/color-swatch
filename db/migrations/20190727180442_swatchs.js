exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('swatches', function(table) {
      table.increments('swatchId').primary();
      table.string('name').notNull();
      table.string('category').notNull();
      table.timestamp('createdAt', { useTz: true }).defaultTo(knex.fn.now());
      table.timestamp('updatedAt', { useTz: true }).defaultTo(knex.fn.now());
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('swatches')
  ])
};
