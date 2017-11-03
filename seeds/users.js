
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'johndoe43', password: 'heyjohn', email: 'johndoe43@gmail.com'},
        {id: 2, username: 'janedoe43', password: 'heyjane', email: 'janedoe43@gmail.com'},
        {id: 3, username: 'geebrown43', password: 'heygav', email: 'geebrown43@gmail.com'}
      ]);
    });
};
