const express = require(`express`);

const controllers = require(`../controllers/movies`)
// const {moviesControllers} = require(`../controllers/movies`)
const router = express.Router();

// router.get(`/movies`, moviesControllers)
router.get(`/movies`, controllers.moviesControllers);
router.post(`/movies`, controllers.createMovieController);

module.exports = router;