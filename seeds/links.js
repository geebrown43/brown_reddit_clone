
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('links').del()
    .then(function () {
      // Inserts seed entries
      return knex('links').insert([
        {id: 1, name: 'WorldStar', site: 'www.worldstarhiphop.com'},
        {id: 2, name: 'Facebook', site: 'www.facebook.com'},
        {id: 3, name: 'Google', site: 'www.google.com'}
      ]);
    });
};
