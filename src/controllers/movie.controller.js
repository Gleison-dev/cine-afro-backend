import { MovieService } from "../services/Movie.service.js";

const instanceMovieService = new MovieService();

const createMovie = async (req, res) => {
  const {
    title,
    genre,
    director,
    synopsis,
    year_release,
    actors,
    watch,
    trailer,
  } = req.body;
  const newMovie = await instanceMovieService.createMovieService(
    title,
    genre,
    director,
    synopsis,
    year_release,
    actors,
    watch,
    trailer
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

const getMovieByDirector = async (req, res) => {
  const { director } = req.query;
  const movieByDirector = await instanceMovieService.getMovieByDirectorService(
    director
  );
  res.json({ director });
};

const getMovieByActor = async (req, res) => {
  const { actor } = req.query;
  const movieByActor = await instanceMovieService.getMovieByActorService(actor);
  res.json({ movieByActor });
};

const deleteMovie = async (req, res) => {
  const { id } = req.query;
  const deletedMovie = await instanceMovieService.deleteMovieService(id);
  res.json({ deleteMovie });
};

export { createMovie, getAllMovies, getMovieByActor, getMovieByDirector, getMovieByGenre, getMovieByTitle, deleteMovie }
