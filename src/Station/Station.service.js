const { schedule } = require('node-cron')
const fetch = require('node-fetch');
const { Station, Bike } = require('..');

schedule("5 */1 * * *", async () => {
    try {
        console.log(`Cronjob to get data from indigo at ${new Date()}`);
        console.log('running the task every hour');

        let [response, weather] = await Promise.all([
            fetch('http://kiosks.bicycletransit.workers.dev/phl'),
            fetch('https://api.openweathermap.org/data/2.5/weather?q=Philadelphia&appid=d3fcdb9ed929ce5ba30e48fb2b8a9eb9')
        ])

        response = await response.json();
        weather = await weather.json();

        let data = response.features.map(feature => {
            let stationId = feature.properties.id
            let Bikes = feature.properties.bikes
            delete feature.properties.id
            delete feature.properties.coordinates
            delete feature.properties.bikes
            return {
                ...feature.properties,
                stationId,
                weather,
                Bikes
            }
        });

        await Station.bulkCreate(data, {
            include: [{
                model: Bike
            }]
        })

        console.log('Finished task');

    } catch (err) {
        console.log(`${new Date()}, message: ${err.message}`);

        res.json({
            err: err.messageEn || 'Something went wrong'
        })
    }
});

exports.getAllStations = async ({ at }) => {
    try {
        let data = await Station.findAll({
            where: {
                createdAt: `${at}.000Z`
            },
            include: [{ all: true }]
        })

        let weather = data[0].weather;

        let stations = data.map(station => {

            station = station.get({ plain: true })
            delete station.weather
            return {
                ...station
            }
        })

        return { at, stations, weather };
    } catch (error) {
        throw error;
    }
}

exports.getStationDetails = async ({ at, id }) => {
    try {
        let station = await Station.findOne({
            where: {
                kioskId: id,
                createdAt: `${at}.000Z`
            },
            include: [{ all: true }]
        })

        station = station.get({ plain: true })
        
        let weather = station.weather;

        delete station.weather

        return { at, station, weather };
    } catch (error) {
        throw error;
    }
}