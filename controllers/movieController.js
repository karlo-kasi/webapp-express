const connection = require("../data/db-movies")


function index(req, res) {

    const sql = "SELECT * FROM movies"

    connection.query(sql, (err, results) => {
        err && res.status(500).json({ error: "Database query failed" })


        console.log(req.imagePath)

        const movies = results.map((movie) => {

            return {
                ...movie,
                image: req.imagePath + movie.image,
            }
        })
        res.json(movies)

        //res.json(results)

    })
}

function show(req, res) {

    const { id } = req.params

    const moviesSql = "SELECT * FROM movies WHERE id = ?"
    const reviewsSql = "SELECT * FROM reviews WHERE movie_id = ?"

    connection.query(moviesSql, [id], (err, results) => {
        err && res.status(500).json({ error: "Database query failed" })
        results.length === 0 && res.status(404).json({ error: "Post not found" })

        const movie = results[0]

        connection.query(reviewsSql, [id], (err, reviewsResults) => {
            err && res.status(500).json({ error: "Database query failed" })
            results.length === 0 && res.status(404).json({ error: "Post not found" })

            movie.reviews = reviewsResults;
            // res.json(movie)

            res.json({
                ...movie,
                image: req.imagePath + movie.image,
            });

        })



    })

}

function update(req, res) {
    const { id } = req.params
    const { image } = req.body

    const sql = `UPDATE movies SET image = ? WHERE id = ?`

    connection.query(sql, [image, id], (err) => {
        err && res.status(500).json({ error: "Server error Update" })
        res.json({ message: "Movie update successfully" })
    })

}

function destroy(req, res) {
    const { id } = req.params

    const sql = "DELETE FROM movies WHERE id = ?"

    connection.query(sql, [id], (err) => {
        err && res.status(500).json({ error: "Database query failed" })
        res.sendStatus(204)
    })
}

function storeReview(req, res) {

    const { id } = req.params

    const { text, name, vote } = req.body

    const sql = 'INSERT INTO reviews ( text, name, vote, movie_id ) VALUES (?,?,?,?)'

    connection.query(sql, [text, name, vote, id], (err, results) => {
        if (err)
            return res.status(500).json({
              error: 'Database Errore StoreReview',
            })

        res.status(201);
        res.json({
            message: 'review Added',
            id: results.insertId,
        });
    })
}

module.exports = { index, show, update, destroy, storeReview }