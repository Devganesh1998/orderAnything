const authService = require('../services/auth.service');

class AuthController {
    #service;

    constructor(service) {
        this.#service = service;
    }

    async signIn(req, res) {
        try {
            const { email, phoneNo, password } = req.body;
            const user = email
                ? await this.#service.getUserFromEmail(email)
                : await this.#service.getUserFromPhoneNo(phoneNo);
            if (user.password === password) {
                res.send(user);
            } else {
                res.status(400).json({ error_msg: 'Incorrect password' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error_msg: 'Internal server error' });
        }
    }

    async signUp(req, res) {
        try {
            const { email, fullName, password, accountType, userType } = req.body;
            await this.#service.createUser(fullName, email, password, accountType, userType);
            res.send({ message: 'Registration successfull' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error_msg: 'Internal server error' });
        }
    }
}

module.exports = new AuthController(authService);