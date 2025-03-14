function setImagePath (req, res, next){
   req.ImagePath = `${req.protocol}://${req.get("host")}/movie_cover`
   next()
}

module.exports = setImagePath