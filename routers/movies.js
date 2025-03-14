const express = require("express")
const router = express.Router()
const {index, show, destroy} = require("../controllers/movieController")


router.get("/", index)

router.get("/:id", show)

router.delete("/:id", destroy)

module.exports = router 