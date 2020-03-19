
exports.up = function(knex, Promise) {
    return knex.schema.createTable('note', tbl => {
        tbl.increments();
        tbl.string('content');
        tbl.time('created_at')
    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('note');
};
