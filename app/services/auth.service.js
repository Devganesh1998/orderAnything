const { QueryTypes } = require('sequelize');
const sql = require('../../database/models');

module.exports = {
    async getUserFromPhoneNo(phoneNo) {
        const [user] =
            (await sql.sequelize.query('SELECT * from users WHERE phoneNo = :phoneNo', {
                replacements: {
                    phoneNo,
                },
                type: QueryTypes.SELECT,
            })) || [];
        return user;
    },

    async getUserFromEmail(email) {
        const [user] =
            (await sql.sequelize.query('SELECT * from users WHERE email = :email', {
                replacements: {
                    email,
                },
                type: QueryTypes.SELECT,
            })) || [];
        return user;
    },

    async createUser(fullName, email, password, accountType, userType) {
        const results = await sql.users.create({
            fullName,
            email,
            password,
            accountType,
            userType,
        });
        return results;
    },
};
