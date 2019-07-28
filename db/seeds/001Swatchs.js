exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('swatches').del()
  .then(function () {
    // Inserts seed entries
    return knex('swatches').insert([
      {
        category: 'COLOR',
        hex1: 'Hex',
        hex2: 'Hex',
        hex3: 'Hex',
        hex4: 'Hex',
        hex5: 'Hex',
        createdAt: '2019-06-19T21:13:40.826Z',
        updatedAt: '2019-06-19T21:13:40.826Z'
      },
      {
        category: 'COLOR',
        hex1: 'Hex',
        hex2: 'Hex',
        hex3: 'Hex',
        hex4: 'Hex',
        hex5: 'Hex',
        createdAt: '2019-06-19T21:13:40.826Z',
        updatedAt: '2019-06-19T21:13:40.826Z'
      }
    ]);
  });
};
