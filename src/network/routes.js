const hotelRouter = require('../api/hotels/hotel.router')

const routes = function (server){
    server.use('/hotels', hotelRouter )
}

module.exports = routes;