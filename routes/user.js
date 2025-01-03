const express = require('express');
const router = express.Router();

const { saveData, readFile } = require('./database/users/dbUser');

function isEmail(email) {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}

function getMessage(type, msg) {
    return { type, msg };
}

function verifyUser(username, email, password){
    if (!username || !email || !password) {
        const message = getMessage('error', "Username, email, and password are required");
        return res.status(400).render('user', { message });
    }
    if (!isEmail(email)) {
        const message = getMessage('error', "Invalid email format");
        return res.status(400).render('user', { message });
    }
    if (password.length < 8) {
        const message = getMessage('error', "Password must be at least 8 characters long");
        return res.status(400).render('user', { message });
    }
}

router.get("/api/users/table", (req, res) => {
    const users = readFile();
    return res.render('table', { users });
});


router.get("/api/users", (req, res) => {
    const users = readFile();
    return res.render('user', { users });
});


router.get("/api/users/:id", (req, res) => {
    const users = readFile();
    const userId = parseInt(req.params.id);

    const findUser = users.find((user) => user.id === userId);
    if (!findUser) {
        return res.status(404).send({ error: "User not found" });
    }
    return res.send(findUser);
});

router.post("/api/users/", (req, res) => {
    const { username, email, password } = req.body;

    verifyUser(username, email, password);

    const users = readFile();
    const newUser = {
        id: new Date().getTime(),
        username,
        email,
        password,
    };

    users.push(newUser);
    saveData(users);

    const message = getMessage('success', "User successfully registered!");
    return res.status(201).redirect('/api/users');
});

router.put("/api/users/:id", (req, res) => {
    const userId = parseInt(req.params.id);
    const { username, email, password } = req.body;

    verifyUser(username, email, password);

    const users = readFile();
    const index = users.findIndex((user) => user.id === userId);

    if (index === -1) {
        const message = getMessage('error', "User not found");
        return res.status(404).render('user', { message });
    }

    users[index] = { id: userId, username, email, password };
    saveData(users);

    const message = getMessage('success', "User successfully updated!");
    return res.status(200).redirect('/api/users', { message });
});

router.delete("/api/users/:id", (req, res) => {
    const userId = parseInt(req.params.id);

    if (isNaN(userId)) {
        const message = getMessage('error', "Invalid user ID");
        return res.status(400).render('user', { message });
    }

    const users = readFile();
    const index = users.findIndex((user) => user.id === userId);

    if (index === -1) {
        const message = getMessage('error', "User not found");
        return res.status(404).render('user', { message });
    }

    users.splice(index, 1);
    saveData(users);

    const message = getMessage('info', "User successfully deleted!");
    return res.status(200).redirect('/api/users', { message });
});

module.exports = router;
