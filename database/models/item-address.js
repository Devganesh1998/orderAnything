module.exports = (sequelize, DataTypes) => {
    const itemAddress = sequelize.define(
        'item-address',
        {
            itemAddressId: {
                allowNull: false,
                primaryKey: true,
                unique: true,
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
            tableName: 'item-address',
        },
    );
    return itemAddress;
};
