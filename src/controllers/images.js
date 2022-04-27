const getHelper = require('../helpers/get');

const getImages = (req, res) => {
  getHelper(req, res);
};

module.exports = {
  getImages,
}