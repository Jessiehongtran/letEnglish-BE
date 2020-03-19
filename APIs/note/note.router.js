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
            .then(id => {
                res.status(200).json(id)
            })
            .catch(err => {
                res.status(500).json(err.message)
            })
})

// UPDATE a note
router.patch('/:id', (req, res) => {
    const change = req.body;
    console.log('change', change)
    const id = req.params.id;
    console.log('id', id)
    noteModel.getNoteById(id)
            .then(note => {
                console.log('note', note)
                if (note){
                    noteModel.updateNote(id, change)
                            .then(count => {
                                res.status(200).json({messgae: `updated ${count} note`})
                            })
                            .catch(err => res.status(500).json(err.message))
                }
                else {
                    res.status(404).json({message: "node does not exist"})
                }
            })
            .catch(err => res.status(500).json(err.message))
})


// DELETE a note
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    console.log('id', id)
    noteModel.getNoteById(id)
            .then(note => {
                console.log('note', note)
                if (note){
                    noteModel.deleteNote(id)
                            .then(count => {
                                res.status(200).json({messgae: `deleted ${count} note`})
                            })
                            .catch(err => res.status(500).json(err.message))
                }
                else {
                    res.status(404).json({message: "node does not exist"})
                }
            })
            .catch(err => res.status(500).json(err.message))
})

module.exports = router;