const express = require("express");
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;


app.use(express.static('public'));
app.use(express.json());
app.get('/', function (req, res) {
        res.sendFile(__dirname + '/views/home.html');
    });
app.get('/login', function (req, res) {
        res.sendFile(__dirname + '/views/login.html');
    });
app.get('/register', function (req, res) {
        res.sendFile(__dirname + '/views/register.html');
    });
app.post('/', function (req, res) {
        console.log(req.body);
        res.sendFile(__dirname + '/views/login.html');
    });
app.listen(port, function () {
        return console.log('Server listening at http://localhost:${port}');
    }
);



