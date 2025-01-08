class Utils {
    static isEmail(email) {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    }

    static getMessage(type, msg) {
        return { type, msg };
    }

    static verifyUser(username, email, password, res) {
        if (!username || !email || !password) {
            const message = this.getMessage('error', "Username, email, and password are required");
            return res.status(400).render('user', { message });
        }
        if (!this.isEmail(email)) {
            const message = this.getMessage('error', "Invalid email format");
            return res.status(400).render('user', { message });
        }
        if (password.length < 8) {
            const message = this.getMessage('error', "Password must be at least 8 characters long");
            return res.status(400).render('user', { message });
        }
    }
}

module.exports = Utils;