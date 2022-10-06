const { getStationsSchema, getStationDetailsSchema } = require("./Station.validation");


exports.validateGetStations = async (req, res, next) => {
    try {
        await getStationsSchema.validateAsync({ ...req.query })

        next();
    } catch (error) {
        res.status(error.status || 400).json({
            message: error.message || 'Something went wrong',
        })
    }
}

exports.validateGetStationDetails = async (req, res, next) => {
    try {
        await getStationDetailsSchema.validateAsync({ ...req.query, ...req.params })

        next();
    } catch (error) {
        res.status(error.status || 400).json({
            message: error.message || 'Something went wrong',
        })
    }
}