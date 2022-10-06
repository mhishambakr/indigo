const stationRoutes = require('./Station/Station.routes')



module.exports = (app,base)=>{
    app.use(`${base}/stations`, stationRoutes)
}