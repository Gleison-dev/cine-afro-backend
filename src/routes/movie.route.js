import { Router } from "express";
import {
  createMovie,
  getAllMovies,
  getMovieByGenre,
  getMovieByTitle,
  deleteMovie,
} from "../controllers/movie.controller.js";

const movieRoute = Router();

movieRoute.post("/createMovie", createMovie);
movieRoute.get("/movies", getAllMovies);
movieRoute.get("/movieByGenre", getMovieByGenre);
movieRoute.get("/movieByTitle", getMovieByTitle);
movieRoute.delete("/deleteMovie", deleteMovie);

export { movieRoute };
