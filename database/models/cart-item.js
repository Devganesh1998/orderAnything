module.exports = (sequelize, DataTypes) => {
    const cartItem = sequelize.define(
        'cart-item',
        {
            cartItemId: {
                allowNull: false,
                primaryKey: true,
                unique: true,
                validate: { isUUID: 4 },
                defaultValue: DataTypes.UUIDV4,
                type: DataTypes.UUID,
            },
            quantity: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 1,
            },
        },
        {
            timestamps: true,
            tableName: 'cart-item',
        },
    );
    cartItem.associate = (models) => {
        cartItem.belongsTo(models.carts, {
            foreignKey: 'cartId',
            allowNull: false,
            validate: { isUUID: 4 },
            type: DataTypes.UUID,
        });
        cartItem.belongsTo(models.items, {
            foreignKey: 'cartId',
            allowNull: false,
            validate: { isUUID: 4 },
            type: DataTypes.UUID,
        });
    };
    return cartItem;
};
