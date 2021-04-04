const addresses = require('./addresses');
const items = require('./items');

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
                validate: { isUUID: 4 },
                type: DataTypes.UUID,
            },
            itemId: {
                allowNull: false,
                validate: { isUUID: 4 },
                type: DataTypes.UUID,
            },
        },
        {
            timestamps: true,
            tableName: 'item-address',
        },
    );
    itemAddress.belongsTo(addresses, { foreignKey: 'addressId' });
    itemAddress.belongsTo(items, { foreignKey: 'itemId' });
    return itemAddress;
};
