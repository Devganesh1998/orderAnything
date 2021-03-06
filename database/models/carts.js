const { CART_STAGE } = require('../../config');

module.exports = (sequelize, DataTypes) => {
    const carts = sequelize.define(
        'carts',
        {
            cartId: {
                allowNull: false,
                primaryKey: true,
                unique: true,
                validate: { isUUID: 4 },
                defaultValue: DataTypes.UUIDV4,
                type: DataTypes.UUID,
            },
            stage: {
                type: DataTypes.ENUM(Object.keys(CART_STAGE)),
                defaultValue: CART_STAGE.OPEN,
            },
        },
        {
            timestamps: true,
            tableName: 'carts',
            indexes: [{ fields: ['stage'] }],
        },
    );

    carts.associate = (models) => {
        carts.belongsTo(models.customers, {
            foreignKey: 'customerId',
            allowNull: false,
            validate: { isUUID: 4 },
            type: DataTypes.UUID,
        });
    };
    return carts;
};
