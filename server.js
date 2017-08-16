const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist'));
app.use(sendIndex);

function sendIndex(req,res) {
    res.sendFile('index.html', { root: '.' });
}

app.listen(process.env.PORT || 8080);