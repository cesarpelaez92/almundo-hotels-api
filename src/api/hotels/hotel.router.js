const express = require('express');
const response = require('../../network/reponse');
const hotelController = require('./hotel.controller');
const hotelRouter = express.Router();


hotelRouter.get('/', function (req, res) {
    const filterHotels = req.query.name || null;
    hotelController.getHotels(filterHotels)
        .then((data) => {
            response.success(req, res, data, 200);
        })
        .catch(e => {
            response.error(req, res, e.message, e.code);
        })
})

hotelRouter.get('/:id', function (req, res) {
    hotelController.getHotelById(req.params.id)
        .then((data) => {
            response.success(req, res, data, 200);
        })
        .catch(e => {
            response.error(req, res, e.message, e.code)
        });
})

hotelRouter.post('/', function (req, res) {
    hotelController.addHotel(req.body)
        .then((data) => {
            response.success(req, res, data, 201);
        })
        .catch(e => {
            response.error(req, res, e.message, e.code);
        })

})

hotelRouter.patch('/:id', function (req, res) {
    hotelController.updateHotel(req.params.id, req.body.hotelName)
        .then((data) => {
            response.success(req, res, data, 200);
        })
        .catch(e => {
            response.error(req, res, e.message, e.code);
        });
})

hotelRouter.delete('/:id', function (req, res) {
    hotelController.deleteHotel(req.params.id)
        .then(() => {
            response.success(req, res, `Hotel with id: ${req.params.id} deleted!`, 200);
        })
        .catch(e => {
            response.error(req, res, e.message, e.code);
        })
})

module.exports = hotelRouter;