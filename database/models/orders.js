const { ORDER_STAGE, PAYMENT_MODE } = require('../../config');

module.exports = (sequelize, DataTypes) => {
    const orders = sequelize.define(
        'orders',
        {
            orderId: {
                allowNull: false,
                primaryKey: true,
                unique: true,
                type: DataTypes.UUID,
                validate: { isUUID: 4 },
                defaultValue: DataTypes.UUIDV4,
            },
            dropAddress: {
                allowNull: false,
                type: DataTypes.STRING,
            },
            stage: {
                allowNull: false,
                type: DataTypes.ENUM(Object.keys(ORDER_STAGE)),
            },
            paymentMode: {
                allowNull: false,
                type: DataTypes.ENUM(Object.keys(PAYMENT_MODE)),
            },
            lat: {
                allowNull: false,
                type: DataTypes.FLOAT,
            },
            long: {
                allowNull: false,
                type: DataTypes.FLOAT,
            },
        },
        {
            tableName: 'orders',
            timestamps: true,
            indexes: [{ fields: ['stage', 'paymentMode'] }],
        },
    );
    orders.associate = (models) => {
        orders.belongsTo(models.customers, {
            foreignKey: 'customerId',
            allowNull: false,
            validate: { isUUID: 4 },
            type: DataTypes.UUID,
        });
        orders.belongsTo(models.deliveryPerson, {
            foreignKey: 'deliveryPersonId',
            allowNull: false,
            validate: { isUUID: 4 },
            type: DataTypes.UUID,
        });
    };

    return orders;
};
