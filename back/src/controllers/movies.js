const {getMovies, createMovie} = require(`../services/moviesService`)

const moviesControllers = async (req, res) => {
    
    try {
        const moviesData = await getMovies();

        console.log('controller', moviesData)
        //res.json({movies: moviesData});
        res.json(moviesData);
    } catch (error) {
        res.status(`300`).send(`Error en la petición`)
    }
    
}

const createMovieController = async (req, res) => {

    const movieData = req.body

    try {
        const getService = await createMovie(movieData);
        
        res.send(getService)
    } catch (error) {
        res.status(400).send('Error al crear')
    }
}

module.exports = {
    moviesControllers,
    createMovieController,
}
