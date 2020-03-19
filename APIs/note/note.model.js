const db = require('../../data/dbConfig');

function getAll(){
    return db("note")
}

function addNote(note){
    return db("note")
            // .returning("id")
            .insert(note)
            .then(ids => ({id: ids[0]}))
}

module.exports = {
    getAll,
    addNote
}