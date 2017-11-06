
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('links').del()
    .then(function () {
      // Inserts seed entries
      return knex('links').insert([
        {id: 1, name: 'WorldStar', link: 'www.worldstarhiphop.com', votes:'1'},
        {id: 2, name: 'Facebook', link: 'www.facebook.com', votes: '2'},
        {id: 3, name: 'Google', link: 'www.google.com', votes: '4'}
      ]);
    });
};
