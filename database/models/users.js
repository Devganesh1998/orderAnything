const { ACCOUNT_TYPE, USER_TYPE } = require('../../config');

module.exports = (sequelize, DataTypes) => {
    const users = sequelize.define(
        'users',
        {
            userId: {
                allowNull: false,
                primaryKey: true,
                unique: true,
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                validate: { isUUID: 4 },
            },
            fullName: {
                type: DataTypes.STRING,
            },
            phoneNo: {
                type: DataTypes.BIGINT,
                unique: true,
            },
            countryCode: {
                type: DataTypes.STRING(20),
            },
            email: {
                unique: true,
                type: DataTypes.STRING,
                validate: { isEmail: true },
            },
            accountType: {
                allowNull: false,
                type: DataTypes.ENUM(Object.keys(ACCOUNT_TYPE)),
            },
            userType: {
                allowNull: false,
                type: DataTypes.ENUM(Object.keys(USER_TYPE)),
            },
            password: {
                allowNull: false,
                type: DataTypes.TEXT('medium'),
            },
            accountVerified: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
        },
        {
            tableName: 'users',
            timestamps: true,
            indexes: [{ fields: ['accountType'] }],
        },
    );
    return users;
};
