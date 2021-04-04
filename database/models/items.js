module.exports = (sequelize, DataTypes) => {
    const items = sequelize.define(
        'items',
        {
            itemId: {
                allowNull: false,
                primaryKey: true,
                unique: true,
                type: DataTypes.UUID,
                validate: { isUUID: 4 },
                defaultValue: DataTypes.UUIDV4,
            },
            categoryName: {
                allowNull: false,
                type: DataTypes.STRING,
            },
        },
        {
            timestamps: true,
            tableName: 'items',
            indexes: [{ fields: ['categoryName'] }],
        },
    );
    return items;
};
