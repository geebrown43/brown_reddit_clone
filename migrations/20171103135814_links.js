
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('links', (table)=>{
          table.increments().primary()
          table.string('name')
          table.string('site')
          
        })
      ])
};

exports.down = function(knex, Promise) {
    knex.schema.dropTable('links')
};
