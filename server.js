const express = require('express');
const server = express();
const cors = require('cors');

const noteRouter = require('./APIs/note/note.router');

server.use(express.json());
server.use(cors());
server.use('/api/note', noteRouter);

server.get('/', (req,res) => {
    res.send('Hello from Express');
})

module.exports = server;



