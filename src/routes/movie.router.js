import { Router } from "express";
import {
  createMovie,
  getAllMovies,
  getMovieByActor,
  getMovieByDirector,
  getMovieByGenre,
  getMovieByTitle,
  deleteMovie,
} from "../controllers/movie.controller.js";

const movieRoute = Router();

movieRoute.post("/createMovie", createMovie);
movieRoute.get("/movies", getAllMovies);
movieRoute.get("/movieByTitle", getMovieByTitle);
movieRoute.get("/movieByDirector", getMovieByDirector);
movieRoute.get("/movieByGenre", getMovieByGenre);
movieRoute.get("/movieByActor", getMovieByActor);
movieRoute.delete("/deleteMovie", deleteMovie);

export { movieRoute };
