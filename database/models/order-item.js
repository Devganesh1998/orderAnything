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
    orderItem.associate = (models) => {
        orderItem.belongsTo(models.orders, {
            foreignKey: 'orderId',
            allowNull: false,
            validate: { isUUID: 4 },
            type: DataTypes.UUID,
        });
        orderItem.belongsTo(models.items, {
            foreignKey: 'itemId',
            allowNull: false,
            validate: { isUUID: 4 },
            type: DataTypes.UUID,
        });
        orderItem.belongsTo(models.addresses, {
            foreignKey: 'pickupLocation',
            allowNull: false,
            validate: { isUUID: 4 },
            type: DataTypes.UUID,
        });
    };
    return orderItem;
};
