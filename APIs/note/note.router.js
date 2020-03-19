const router = require("express").Router();
const noteModel = require('./note.model');

// GET all notes
router.get('/', (req, res) => {
    noteModel.getAll()
            .then(notes => {
                res.status(200).json(notes)
            })
            .catch(err => {
                res.status(500).json(err.message)
            })
})

// POST a note
router.post('/', (req, res) => {
    const note = req.body
    noteModel.addNote(note)
            .then( id => {
                res.status(200).json(id)
            })
            .catch(err => {
                res.status(500).json(err.message)
            })
})

module.exports = router;