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

function getNoteById(id){
    return db("note")
            .where({id: id})
            .then(notes => notes[0])
}

function updateNote(id, change){
    return db("note")
            .where({id: id})
            .update(change)
}

function deleteNote(id){
    return db("note")
            .where({id: id})
            .del()
}

module.exports = {
    getAll,
    addNote,
    getNoteById,
    updateNote,
    deleteNote
}