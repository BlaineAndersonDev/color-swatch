exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('swatchs').del()
  .then(function () {
    // Inserts seed entries
    return knex('swatchs').insert([
      {
        name: 'COLORSET',
        category: 'COLOR',
        createdAt: '2019-06-19T21:13:40.826Z',
        updatedAt: '2019-06-19T21:13:40.826Z'
      },
      {
        name: 'COLORSET',
        category: 'COLOR',
        createdAt: '2019-06-19T21:13:40.826Z',
        updatedAt: '2019-06-19T21:13:40.826Z'
      }
    ]);
  });
};
