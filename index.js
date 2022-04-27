const express = require('express')

const app = express()

app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
  return res.json({
    success: true,
    message: 'AIA Test Backend is running Well!'
  })
})

app.listen(5000, ()=> {
  console.log('App running on port 5000');
})