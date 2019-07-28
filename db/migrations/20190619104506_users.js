exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', function(table) {
      table.increments('userId').primary();
      table.string('gender').notNull();
      table.dateTime('birthdate').notNull().defaultTo(knex.fn.now());
      table.string('firstName').notNull();
      table.string('middleName').notNull();
      table.string('lastName').notNull();
      table.string('title').notNull();
      table.string('preferredName').notNull();
      table.specificType('datingUppers', 'text ARRAY');
      table.specificType('datingDowners', 'text ARRAY');
      table.boolean('premium').notNull().defaultTo(false);
      table.boolean('profileCreated').notNull().defaultTo(false);
      table.timestamp('createdAt', { useTz: true }).defaultTo(knex.fn.now());
      table.timestamp('updatedAt', { useTz: true }).defaultTo(knex.fn.now());
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('users')
  ])
};
