import { ACCOUNT_TYPE, USER_TYPE } from '../../config';

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
            },
            fullName: {
                type: DataTypes.STRING,
            },
            phoneNo: {
                allowNull: false,
                type: DataTypes.INTEGER,
                unique: true,
            },
            countryCode: {
                allowNull: false,
                type: DataTypes.STRING(20),
            },
            email: {
                type: DataTypes.STRING,
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
                type: DataTypes.TEXT.medium,
            },
            isAdmin: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            accountVerified: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
        },
        {
            tableName: 'users',
        },
    );
    return users;
};
