import { MovieService } from "../services/Movie.service.js";

const instanceMovieService = new MovieService();

const createMovie = async (req, res) => {
  const { title, genre, director, synopsis, year_release, actors, watch } =
    req.body;
  const newMovie = await instanceMovieService.createMovieService(
    title,
    genre,
    director,
    synopsis,
    year_release,
    actors,
    watch
  );
  res.status(201).json({ newMovie });
};

const getAllMovies = async (req, res) => {
  const movies = await instanceMovieService.getAllMoviesService();
  res.json({ movies });
};
