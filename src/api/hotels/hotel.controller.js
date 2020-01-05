const hotelService = require('./hotel.service');

function getHotels (filterHotels) {
    return hotelService.getAll(filterHotels);
}

function getHotelById (id) {
    return hotelService.getById(id);
}

function addHotel (hotel) {
     return hotelService.add(hotel);
}       
function updateHotel (id, name) {
    return hotelService.updateById(id, name);
}

function deleteHotel (id) {
    return hotelService.delete(id);
}

module.exports = {
    addHotel,
    getHotels,
    getHotelById,
    updateHotel,
    deleteHotel
}