const images = require('express').Router();

const { getImages } = require('../controllers/images');

images.get('/', getImages);

module.exports = images;