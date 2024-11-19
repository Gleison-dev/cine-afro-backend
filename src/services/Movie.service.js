import { MovieEntity } from "../entities/movie.entity.js";
import { ERRORS, SUCESS } from "../shared/movie.message.js";

class MovieService {
  async createMovieService(
    title,
    genre,
    director,
    synopsis,
    year_release,
    actors,
    watch
  ) {
    try {
      await MovieEntity.sync();
      const verifyMovieExists = await MovieEntity.findOne({
        where: {
          title,
          director,
        },
      });
      if (verifyMovieExists) {
        return `${ERRORS.ALREADY_EXISTS}`;
      }
      const createBook = await MovieEntity.create({
        title,
        genre,
        director,
        synopsis,
        year_release,
        actors,
        watch,
      });
      return `${SUCESS.CREATED}`;
    } catch (error) {
      return console.error(error);
    }
  }

  async getAllMovies() {
    try {
      const movies = await MovieEntity.findAll();
      return movies;
    } catch (error) {}
  }

  async getMovieByTitle(title) {
    try {
      const verifyMovieExists = await MovieEntity.findOne({
        where: title,
      });
      if (!verifyMovieExists) {
        return `${ERRORS.NOT_FOUND}`;
      }
      const movieByTitle = await MovieEntity.findAll({
        where: {
          title,
        },
      });
      return movieByTitle;
    } catch (error) {
      return console.error(error);
    }
  }
}
