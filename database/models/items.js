module.exports = (sequelize, DataTypes) => {
    const items = sequelize.define(
        'items',
        {
            categoryName: {
                allowNull: false,
                type: DataTypes.STRING,
            },
            itemId: {
                allowNull: false,
                primaryKey: true,
                unique: true,
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
            },
        },
        {
            tableName: 'items',
            indexes: [{ fields: ['categoryName'] }],
        },
    );
    return items;
};
