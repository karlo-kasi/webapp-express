const express = require("express")
const router = express.Router()
const {index, show, update, destroy, storeReview, store} = require("../controllers/movieController")
const upload = require("../middlewares/multer")


router.get("/", index)

router.get("/:id", show)

router.patch("/:id", update)

router.delete("/:id", destroy)

router.post("/:id/reviews", storeReview)

router.post("/", upload.single("image"), store)

module.exports = router