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
            addressId: {
                allowNull: false,
                type: DataTypes.UUID,
            },
            itemId: {
                allowNull: false,
                type: DataTypes.UUID,
            },
        },
        {
            timestamps: true,
            tableName: 'item-address',
        },
    );
    return itemAddress;
};
