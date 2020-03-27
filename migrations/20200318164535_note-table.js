
exports.up = function(knex, Promise) {
    return knex.schema.createTable('note', tbl => {
        tbl.increments();
        tbl.string('content', 5000);
        tbl.string('created_at')
    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('note');
};
