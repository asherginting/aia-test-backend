const express = require('express')
require('dotenv').config();
const app = express()
const cors = require ('cors');

// app.use(express.urlencoded({extended: true}))
app.use(cors());

app.use(require('./src/routes'));


const { APP_PORT } = process.env;

app.listen(APP_PORT, ()=> {
  console.log(`Backend running on port ${APP_PORT}`);
})