function setImagePath (rec, res, next){
   req.ImagePath = `${rec.protocol}://${req.get("host")}/movie_cover`
   next()
}

module.exports = setImagePath