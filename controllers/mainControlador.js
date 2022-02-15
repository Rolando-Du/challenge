const path = require("path");
const controller = {
    home: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/home.html'))
    },
};
const controller = {
    login: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/login.html'))
    },
};
const controller = {
    register: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/register.html'))
    },
};



module.exports = controller;