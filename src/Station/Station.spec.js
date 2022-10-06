const { getAllStations, getStationDetails } = require("./Station.service")

describe('getAllStations', () => {
    it('Should return an object with at, stations, weather fields', async () => {
        let res = await getAllStations({ at: '2022-10-05T21:05:08' })
        expect(res).toMatchObject({})
        expect(res).toHaveProperty('at')
        expect(res).toHaveProperty('stations')
        expect(res).toHaveProperty('weather')
    })
    it('Should return a 404 error if there are no records recorded', async () => {
        await expect(async () => await getAllStations({ at: '1999-10-05T21:05:08' })).rejects.toEqual({ "message": "No data found", "status": 404 })
    })

})

describe('getStationDetails', () => {
    it('Should return an object with at, stations, weather fields', async () => {
        let res = await getStationDetails({ id: 3004, at: '2022-10-05T21:05:08' })
        expect(res).toMatchObject({})
        expect(res).toHaveProperty('at')
        expect(res).toHaveProperty('station')
        expect(res).toHaveProperty('weather')
    })
    it('Should return a 404 error if there are no records recorded', async () => {
        await expect(async () => await getStationDetails({ id: 9999999999, at: '1999-10-05T21:05:08' })).rejects.toEqual({ "message": "No data found", "status": 404 })
    })

})