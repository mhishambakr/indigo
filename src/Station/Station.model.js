module.exports = (sequelize, Sequelize) => {
    const Station = sequelize.define("Stations", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        stationId: {
            type: Sequelize.INTEGER
        },
        name: {
            type: Sequelize.STRING
        },
        // coordinates: {
        //     type: Sequelize.GEOMETRY
        // },
        totalDocks: {
            type: Sequelize.INTEGER
        },
        docksAvailable: {
            type: Sequelize.INTEGER
        },
        bikesAvailable: {
            type: Sequelize.INTEGER
        },
        classicBikesAvailable: {
            type: Sequelize.INTEGER
        },
        smartBikesAvailable: {
            type: Sequelize.INTEGER
        },
        electricBikesAvailable: {
            type: Sequelize.INTEGER
        },
        rewardBikesAvailable: {
            type: Sequelize.INTEGER
        },
        rewardDocksAvailable: {
            type: Sequelize.INTEGER
        },
        kioskStatus: {
            type: Sequelize.STRING
        },
        kioskPublicStatus: {
            type: Sequelize.STRING
        },
        kioskConnectionStatus: {
            type: Sequelize.STRING
        },
        kioskType: {
            type: Sequelize.INTEGER
        },
        addressStreet: {
            type: Sequelize.STRING
        },
        addressCity: {
            type: Sequelize.STRING
        },
        addressState: {
            type: Sequelize.STRING
        },
        addressZipCode: {
            type: Sequelize.STRING
        },
        closeTime: {
            type: Sequelize.STRING
        },
        eventEnd: {
            type: Sequelize.STRING
        },
        eventStart: {
            type: Sequelize.STRING
        },
        isEventBased: {
            type: Sequelize.BOOLEAN
        },
        isVirtual: {
            type: Sequelize.BOOLEAN
        },
        kioskId:  {
            type: Sequelize.INTEGER
        },
        notes: {
            type: Sequelize.STRING
        },
        openTime: {
            type: Sequelize.STRING
        },
        publicText: {
            type: Sequelize.STRING
        },
        timeZone: {
            type: Sequelize.STRING
        },
        trikesAvailable: {
            type: Sequelize.INTEGER
        },
        latitude: {
            type: Sequelize.FLOAT
        },
        longitude: {
            type: Sequelize.FLOAT
        },
        weather: {
            type: Sequelize.JSON
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

    return Station
}