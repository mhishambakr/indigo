const joi = require('joi')

const stationSchema = {
    kioskId: joi.number().integer(),
    at: joi.date(),
}

exports.getStationsSchema = joi.object({
    at: stationSchema.at.required(),
})

exports.getStationDetailsSchema = joi.object({
    at: stationSchema.at.required(),
    id: stationSchema.kioskId.required()
})