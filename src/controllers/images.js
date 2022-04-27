const getImages = (req, res) => {
  return res.json({
    success: true,
    message: 'list of images from API'
  })

}

module.exports = {
  getImages,
}