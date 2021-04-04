const { ORDER_STAGE, PAYMENT_MODE } = require('../../config');
const customers = require('./customers');
const deliveryPerson = require('./deliveryPerson');

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
    orders.belongsTo(customers, { foreignKey: 'customerId', allowNull: false });
    orders.belongsTo(deliveryPerson, { foreignKey: 'deliveryPersonId', allowNull: false });
    return orders;
};
