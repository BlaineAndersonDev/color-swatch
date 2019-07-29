exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('swatches', function(table) {
      table.increments('swatchId').primary();
      table.string('category').notNull();
      table.string('hex1').notNull();
      table.string('hex2').notNull();
      table.string('hex3').notNull();
      table.string('hex4').notNull();
      table.string('hex5').notNull();
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
