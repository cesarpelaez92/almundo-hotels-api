const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const HotelSchema = new Schema({
    name: String,
    stars: Number,
    price: Number,
    images: Array,
    location: String,
    imageLocation: String
});

module.exports = mongoose.model('hotels', HotelSchema);