const express = require("express")
const app = express()
const port = 3000
const movieRouter = require("./routers/moviesRouter")

const imagePathMiddleware = require("./middlewares/imagePath")

app.use(express.static('public'));
app.use(express.json())
app.use(imagePathMiddleware)



app.use("/movies", movieRouter)


app.listen (port, () => {
   console.log(`Sono in ascolto alla porta: ${port}`)
})