const orders = require('./orders');
const items = require('./items');
const addresses = require('./addresses');

module.exports = (sequelize, DataTypes) => {
    const orderItem = sequelize.define(
        'order-item',
        {
            orderItemId: {
                allowNull: false,
                primaryKey: true,
                unique: true,
                validate: { isUUID: 4 },
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
            },
            orderId: {
                allowNull: false,
                validate: { isUUID: 4 },
                type: DataTypes.UUID,
            },
            itemId: {
                allowNull: false,
                validate: { isUUID: 4 },
                type: DataTypes.UUID,
            },
            pickupLocation: {
                allowNull: false,
                validate: { isUUID: 4 },
                type: DataTypes.UUID,
            },
            quantity: {
                allowNull: false,
                type: DataTypes.INTEGER,
            },
        },
        {
            timestamps: true,
            tableName: 'order-item',
        },
    );
    orderItem.belongsTo(orders, { foreignKey: 'addressId' });
    orderItem.belongsTo(items, { foreignKey: 'itemId' });
    orderItem.belongsTo(addresses, { foreignKey: 'pickupLocation' });
    return orderItem;
};
