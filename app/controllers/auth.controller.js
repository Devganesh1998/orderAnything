const bcrypt = require('bcrypt');
const authService = require('../services/auth.service');
const filterOutputKeys = require('../utils/filterOutputKeys');

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
            if (!user) {
                res.status(404).json({ error_msg: 'User not found with given email/PhoneNo' });
            }
            const isPasswordMatched = await bcrypt.compare(password, user.password);
            if (!isPasswordMatched) {
                res.status(400).json({ error_msg: 'Incorrect password' });
            }
            res.send(user);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error_msg: 'Internal server error' });
        }
    }

    async signUp(req, res) {
        try {
            const { email, fullName, password, accountType, userType, phoneNo, countryCode } = req.body;
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = await this.#service.createUser(
                fullName,
                email,
                hashedPassword,
                accountType,
                userType,
                phoneNo,
                countryCode,
            );
            res.send({ message: 'Registration successfull', user });
        } catch (error) {
            console.error(error);
            const { errors = [], message } = error;
            if (message === 'Validation error') {
                errors.forEach(({ type, path }) => {
                    console.error({ type, path });
                    if (type === 'unique violation') {
                        return res.status(400).json({ message: `An account is already present with given ${path}` });
                    }
                    return false;
                });
            }
            res.status(500).json({ error_msg: 'Internal server error' });
        }
    }

    async getAllUsers(req, res) {
        try {
            const users = await this.#service.getAllUsers();
            users.forEach((user) => filterOutputKeys(user, ['password']));
            res.send({ users });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error_msg: 'Internal server error' });
        }
    }
}

module.exports = new AuthController(authService);
