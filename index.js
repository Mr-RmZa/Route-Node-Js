const fs = require("fs");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.send(
        "<center><form action='/message' method='POST'><input type='text' name='message' /> <input type='submit' /></form><center>"
    );
});

app.get("/hello", (req, res) => {
    res.send("<h1>hello world</h1>");
});

//GET, POST, PUT, Patch, DELETE -> Http Methods

app.post("/message", (req, res) => {
    fs.writeFile("./data/message.txt", req.body.message, (err) => {
        if (err) throw err;
        res.redirect("/");
    });
});

app.listen(3000);
