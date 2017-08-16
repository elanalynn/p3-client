const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist'));
app.use(sendIndex);

function sendIndex(req,res) {
    res.sendFile('/dist/index.html');
}

app.listen(process.env.PORT || 8080);