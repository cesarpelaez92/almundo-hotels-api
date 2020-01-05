const db = require('mongoose');
const { config } = require('../../config');
const HotelShema = require('./hotel.model')

db.Promise = global.Promise;

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = config.dbName;

const options = {
    keepAlive: 1,
    useUnifiedTopology: true,
    useNewUrlParser: true
}

db.connect(`mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}/${DB_NAME}?retryWrites=true&w=majority`, options)
    .then(() => console.log('DB Connected'))
    .catch((err) => {
        console.log(err);

    })

function getHotels(filterHotels) {
    return new Promise((resolve, reject) => {
        let filter = {};
        if (filterHotels !== null) {
            filter = { name: filterHotels };
        }

        HotelShema.find(filter).then((response) => {
            resolve(response.map(transformToHotelResponse));
        }).catch(error => reject(error));
    });
}

function getHotelById(id) {
    return new Promise((resolve, reject) => {
        HotelShema.findOne({ _id: id }).then((response) => {
            if (!response || response.length == 0) {
                reject({ message: `Hotel with id: ${id} not found!`, code: 404 });
            }
            resolve(transformToHotelDetailResponse(response));
        }).catch(error => reject(error));
    });
}

function addHotel({ hotelName, hotelStars, hotelPrice, hotelImages }) {
    return new Promise((resolve, reject) => {
        if (!hotelName || !hotelStars || !hotelPrice || !hotelImages || hotelImages.length == 0) {
            reject({ message: 'Incomplete hotel data!', code: 400 });
        }

        const newHotel = new HotelShema({ name: hotelName, stars: hotelStars, price: hotelPrice, images: hotelImages });
        newHotel.save();
        resolve(newHotel);
    });
}

function updateHotel(id, hotelName) {
    return new Promise((resolve, reject) => {
        HotelShema.findOne({_id: id}).then((response) => {
            if (!response) {
                reject({ message: `Hotel with id: ${id} not found!`, code: 404 })
            }
            response.name = hotelName;
            response.save();
            resolve(response);
        }).catch(error => reject(error));
    });
}

function deleteHotel(id) {
    return new Promise ((resolve, reject) => {
        if (!id) {
            reject({message: 'id is required!', code: 400});
        }
        
        HotelShema.findByIdAndDelete({_id: id}).then((response) => {
            console.log(response);
            if (!response) {
                reject({ message: `Hotel with id: ${id} not found!`, code: 404 })
            }
            resolve(response);
        }).catch(error => reject(error));
    });
}

function transformToHotelResponse(hotel) {
    let newHotel = {
        _id: hotel._id,
        name: hotel.name,
        price: hotel.price,
        stars: hotel.stars,
        images: hotel.images,
    }
   return newHotel;
}

function transformToHotelDetailResponse(hotel) {
    let newHotel = {
        _id: hotel._id,
        name: hotel.name,
        stars: hotel.stars,
        location: hotel.location,
        imageLocation: hotel.imageLocation
    }
   return newHotel;
}

module.exports = {
    add: addHotel,
    getAll: getHotels,
    getById: getHotelById,
    updateById: updateHotel,
    delete: deleteHotel
}