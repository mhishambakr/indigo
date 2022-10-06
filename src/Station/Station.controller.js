const { getAllStations, getStationDetails } = require("./Station.service")


exports.getStations = async (req, res) => {
    try {
        let { at } = req.query;
        let data = await getAllStations({ at })

        res.status(200).json({
            ...data
        })
    } catch (error) {
        res.status(error.status || 500).json({
            status: error.status || 500,
            message: error.message || 'Something went wrong'
        })
    }
}


exports.getStationData = async (req, res) => {
    try {
        let { at } = req.query;
        let { id } = req.params;
        let data = await getStationDetails({ id, at })

        res.status(200).json({
            ...data
        })
    } catch (error) {
        res.status(error.status || 500).json({
            status: error.status || 500,
            message: error.message || 'Something went wrong'
        })
    }
}