const express = require("express")
const router = express.Router()
const {index, show, update, destroy, storeReview} = require("../controllers/movieController")


router.get("/", index)

router.get("/:id", show)

router.patch("/:id", update)

router.delete("/:id", destroy)

router.post("/:id/reviews", storeReview)

module.exports = router 