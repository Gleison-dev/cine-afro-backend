import { MovieService } from "../services/Movie.service.js";

const instanceMovieService = new MovieService();

const createMovie = async (req, res) => {
  const {
    title,
    genre,
    year_release,
    synopsis,
    trailer,
    streaming,
    url_image,
  } = req.body;
  const newMovie = await instanceMovieService.createMovieService(
    title,
    genre,
    year_release,
    synopsis,
    trailer,
    streaming,
    url_image
  );
  res.status(201).json({ newMovie });
};

const getAllMovies = async (req, res) => {
  const movies = await instanceMovieService.getAllMoviesService();
  res.json({ movies });
};

const getMovieByTitle = async (req, res) => {
  const { title } = req.query;
  const movieByTitle = await instanceMovieService.getMovieByTitleService(title);
  res.json({ movieByTitle });
};

const getMovieByGenre = async (req, res) => {
  const { genre } = req.query;
  const movieByGenre = await instanceMovieService.getMovieByGenreService(genre);
  res.json({ movieByGenre });
};

const deleteMovie = async (req, res) => {
  const { id } = req.query;
  const deletedMovie = await instanceMovieService.deleteMovieService(id);
  res.json({ deletedMovie });
};

export {
  createMovie,
  getAllMovies,
  getMovieByGenre,
  getMovieByTitle,
  deleteMovie,
};
