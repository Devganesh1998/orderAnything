module.exports = (sequelize, DataTypes) => {
    const customers = sequelize.define(
        'customers',
        {
            userId: {
                allowNull: false,
                primaryKey: true,
                unique: true,
                validate: { isUUID: 4 },
                type: DataTypes.UUID,
            },
            credits: {
                type: DataTypes.INTEGER,
                defaultValue: 0,
            },
            ordersCount: {
                type: DataTypes.INTEGER,
                defaultValue: 0,
            },
            reviewsCount: {
                type: DataTypes.INTEGER,
                defaultValue: 0,
            },
            address: {
                type: DataTypes.STRING,
            },
            isPrime: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            lat: {
                type: DataTypes.FLOAT,
            },
            long: {
                type: DataTypes.FLOAT,
            },
        },
        {
            timestamps: true,
            tableName: 'customers',
        },
    );
    return customers;
};
