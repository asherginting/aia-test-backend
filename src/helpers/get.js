const axios = require('axios');
const { APP_URL } = process.env;

const get = async (req, res) => {
  let { tags, limit = 5, currentPage = 1 } = req.query
  currentPage = +currentPage
  limit = +limit
  const startAt = currentPage === 1 ? 0 : limit * (currentPage - 1) 

  try {
    const response = await axios(
      `${APP_URL}?format=json&${
        tags && `&tags=${tags}`
      }`
    ) 
    let { data } = response
    data = data.replace("jsonFlickrFeed(", "") 
    data = data.substring(0, data.length - 1) 
    data = JSON.parse(data)
    const images = data.items.slice(startAt, startAt + limit) 
    const totalData = data.items.length 
    const totalPage =
      ~~(totalData / limit) === 0 ? 1 : ~~(totalData / limit) 
    const { modified } = data 
    res.json({
      success: true,
      message: 'List data from flickr API',
      data: images,
      pageInfo: {
        currentPage,
        limit,
        totalPage,
        totalData,
        modified,
      },
    })
  } catch (error) {
    console.log(error.message)
    res.json({
      success: false,
      message: 'Cannot Find Data From API'
    })
  }
}

module.exports = get;