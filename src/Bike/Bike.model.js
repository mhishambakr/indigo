module.exports = (sequelize, Sequelize) => {
    const Bike = sequelize.define("Bikes", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        dockNumber: {
            type: Sequelize.INTEGER
        },
        isElectric: {
            type: Sequelize.BOOLEAN
        },
        isAvailable: {
            type: Sequelize.BOOLEAN
        },
        battery: {
            type: Sequelize.FLOAT
        },
        createdAt: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
        },
        updatedAt: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
        }
    })

    return Bike
}