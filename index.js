const express = require('express')
require('dotenv').config();

const app = express()

// app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
  return res.json({
    success: true,
    message: 'AIA Test Backend is running Well!'
  })
})

const { APP_PORT } = process.env;

app.listen(APP_PORT, ()=> {
  console.log(`Backend running on port ${APP_PORT}`);
})