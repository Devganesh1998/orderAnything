module.exports = (sequelize, DataTypes) => {
    const itemAddress = sequelize.define(
        'item-address',
        {
            itemAddressId: {
                allowNull: false,
                primaryKey: true,
                unique: true,
                validate: { isUUID: 4 },
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
            },
        },
        {
            timestamps: true,
            tableName: 'item-address',
        },
    );
    itemAddress.associate = (models) => {
        itemAddress.belongsTo(models.addresses, {
            foreignKey: 'addressId',
            allowNull: false,
            validate: { isUUID: 4 },
            type: DataTypes.UUID,
        });
        itemAddress.belongsTo(models.items, {
            foreignKey: 'itemId',
            allowNull: false,
            validate: { isUUID: 4 },
            type: DataTypes.UUID,
        });
    };

    return itemAddress;
};
