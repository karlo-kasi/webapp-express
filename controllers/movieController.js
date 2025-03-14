const connection = require("../data/db-movies")


function index(req, res) {

    const sql = "SELECT * FROM movies"
    connection.query(sql, (err, results) => {
        err && res.status(500).json({ error: "Database query failed" })
        
        const movies = results.map( movie => {
            return{
                ...movie,
                imgae: req.imagePath + book,imagePath
            }
        })
        res.json(movies)

    })
}

function show(req, res) {
    const { id } = req.params

    const sql = "SELECT * FROM movies WHERE id = ?"

    connection.query(sql, [id], (err, results) => {
        err && res.status(500).json({ error: "Database query failed" })
        results.length === 0 && res.status(404).json({ error: "Post not found" })
        
        const movie = results[0]

        
        

    })

}

function destroy(req, res) {
    const { id } = req.params

    const sql = "DELETE * FROM movies WHERE id = ?"

    connection.query(sql, [id], (err, results) => {
        err && res.status(500).json({ error: "Database query failed" })
        res.sendStatus(204)
    })
}

module.exports = { index, show, destroy }