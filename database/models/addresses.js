module.exports = (sequelize, DataTypes) => {
    const addresses = sequelize.define(
        'addresses',
        {
            addressId: {
                allowNull: false,
                primaryKey: true,
                unique: true,
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
            },
            address: {
                allowNull: false,
                type: DataTypes.STRING,
            },
            lat: {
                type: DataTypes.FLOAT,
            },
            long: {
                type: DataTypes.FLOAT,
            },
        },
        {
            tableName: 'addresses',
        },
    );
    return addresses;
};
