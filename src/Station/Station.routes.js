const express = require('express');
const { getStations, getStationData } = require('./Station.controller');
const { validateGetStations, validateGetStationDetails } = require('./Station.middlewares');

const router = express.Router()

router.get(`/`, validateGetStations, getStations)

router.get(`/:id`, validateGetStationDetails, getStationData)

module.exports = router;