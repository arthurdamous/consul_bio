const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

app.use(express.static('static'));

if(process.env.NODE_ENV === 'development' ){
    app.use(morgan('dev'));
}

app.get( '/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'))
})

const PORT = process.env.PORT || 4000;
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on ${PORT}`));


