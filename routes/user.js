const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const { saveData, readFile } = require('./database/users/dbUser');
const Utils = require('../views/utils/utils');

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

router.post("/api/users/", async (req, res) => {
    const { username, email, password } = req.body;

    Utils.verifyUser(username, email, password, res);

    const users = readFile();
    const hashPass = await bcrypt.hash(password, 10);
    const newUser = {
        id: new Date().getTime(),
        username: username,
        email: email,
        password: hashPass
    };

    users.push(newUser);
    saveData(users);

    const message = Utils.getMessage('success', "User successfully registered!");
    return res.status(201).redirect('/api/users/');
});

router.put("/api/users/:id", (req, res) => {
    const userId = parseInt(req.params.id);
    const { username, email, password } = req.body;

    Utils.verifyUser(username, email, password, res);

    const users = readFile();
    const index = users.findIndex((user) => user.id === userId);

    if (index === -1) {
        const message = Utils.getMessage('error', "User not found");
        return res.status(404).render('user', { message });
    }
    const hashPass = bcrypt.hash(password, 10);
    users[index] = { id: userId, username, email, password: hashPass };
    saveData(users);

    const message = Utils.getMessage('success', "User successfully updated!");
    return res.status(200).json({ message });
});

router.delete("/api/users/:id", (req, res) => {
    const userId = parseInt(req.params.id);

    if (isNaN(userId)) {
        const message = Utils.getMessage('error', "Invalid user ID");
        return res.status(400).render('user', { message });
    }

    const users = readFile();
    const index = users.findIndex((user) => user.id === userId);

    if (index === -1) {
        const message = Utils.getMessage('error', "User not found");
        return res.status(404).render('user', { message });
    }

    users.splice(index, 1);
    saveData(users);

    const message = Utils.getMessage('info', "User successfully deleted!");
    return res.status(200).json({ message });
});

module.exports = router;
