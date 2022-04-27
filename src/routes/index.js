const route = require('express').Router();

route.use('/images', require('./images'));

route.get('/', (req, res) => {
  return res.json({
    success: true,
    message: 'AIA Test Backend is running Well!'
  })
})

module.exports = route;