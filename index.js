const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('static'));

app.get( '/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'))
})

const PORT = 3000;

const server = app.listen(5000, 'localhost', () => {
    console.log('Servidor está em funcionamento')
})


