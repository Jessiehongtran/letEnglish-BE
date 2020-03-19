
exports.up = function(knex, Promise) {
    return knex.schema.createTable('note', tbl => {
        tbl.increments();
        tbl.text('content')
    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('note');
};
