const multer = require("multer")

//funzione di upload
const storage = multer.diskStorage({
    destination: "./public/movies_cover",
    filename: (req, file, cb) => {
        const uniqueName = `${Date.now()}-${file.originalname}`
        cb(null, uniqueName)
    }
})

const upload = multer({storage})

module.exports = upload