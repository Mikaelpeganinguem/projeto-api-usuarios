const express = require('express');
const router = express.Router();

const { saveData, readFile } = require('./database/users/dbUser');


function isEmail(email) {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}

function verifyUser(username, email, password){
    if (!username || username.trim() === "") {
        return res.status(400).send({ error: "Bad request", msg: "username, email and password are obrigatory" });
    }
    if(!isEmail(email)){
        return res.status(400).send({ error: "Bad request", msg: "Email is not avaliable"});
    }
    if(password.length < 8){
        return res.status(400).send({ error: "Bad request", msg: "the password must be at least 8 characters long"});
    }
}


router.get("/api/users", (req, res) => {
    const users = readFile();
    res.send(users);
});


router.get("/api/users/:id", (req, res) => {
    const users = readFile();
    const userId = parseInt(req.params.id);

    const findUser = users.find((user) => user.id === userId);
    if (!findUser) { return res.status(404); }
    return res.send(findUser);
});


router.post("/api/users/", (req, res) => {
    const { username, email, password } = req.body;

    verifyUser(username, email, password)
    
    const users = readFile()    
    
    const newuser = { 
        id: new Date().getTime(), 
        username: username, 
        email: email,
        password: password
    }

    users.push(newuser);
    saveData(users);
    return res.status(201).send(newuser);
});


router.put("/api/users/:id", (req, res) => {
    const userId = parseInt(req.params.id);
    const { username, email, password } = req.body;

    verifyUser(username, email, password)

    const users = readFile();
    const index = users.findIndex((user) => user.id === userId);
    if (index === -1) {
        return res.status(404);
    } else {
        users[index].username = username;
        users[index].email = email;
        users[index].password = password;
        saveData(users);
    }
    return res.status(201).send({ msg: "Data updated." });
});


router.delete("/api/users/:id", (req, res) => {
    const userId = parseInt(req.params.id);
    if (isNaN(userId)) {
        return res.status(400).send({error: "bad request", msg: "is not a number"});
    }
    
    const users = readFile();
    const index = users.findIndex((user) => user.id === userId);
    if (index === -1) {
        return res.status(404).send({msg: "user not found"});
    }
    users.splice(index, 1);
    saveData(users);
    return res.status(201).send({ msg: "user deleted with sucessfull" });
});


module.exports = router
