module.exports = (sequelize, DataTypes) => {
    const deliveryPerson = sequelize.define(
        'deliveryPerson',
        {
            userId: {
                allowNull: false,
                primaryKey: true,
                unique: true,
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
            },
            ordersCount: {
                type: DataTypes.INTEGER,
                defaultValue: 0,
            },
            reviewsCount: {
                type: DataTypes.INTEGER,
                defaultValue: 0,
            },
            vehicleNo: {
                type: DataTypes.STRING,
            },
            isActive: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            averageRating: {
                defaultValue: 0,
                type: DataTypes.FLOAT,
            },
            lat: {
                type: DataTypes.FLOAT,
            },
            long: {
                type: DataTypes.FLOAT,
            },
        },
        {
            tableName: 'deliveryPerson',
        },
    );
    return deliveryPerson;
};
