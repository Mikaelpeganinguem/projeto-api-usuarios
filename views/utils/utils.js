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

const getButtonDelete = document.getElementById('#deleteButton');
const getButtonEdit = document.getElementById('#deleteButton');
const getUserTable = document.querySelectorAll('#userTable tr');

getUserTable.addEventListener('mouseenter', () => {
    getButtonDelete.addEventListener('click', () => {
        // em estudo
    });
});

getUserTable.addEventListener('mouseenter', () => {
    getButtonEdit.addEventListener('click', () => {
        // em estudo
    });
});

module.exports = { verifyUser, getMessage }