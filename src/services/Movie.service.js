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

  async getAllMoviesService() {
    try {
      const movies = await MovieEntity.findAll();
      return movies;
    } catch (error) {}
  }

  async getMovieByTitleService(title) {
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

  async getMovieByGenreService(genre) {
    try {
      const verifyMovieExists = await MovieEntity.findOne({
        where: {
          genre,
        },
      });
      if (!verifyMovieExists) {
        return `${ERRORS.NOT_FOUND}`;
      }
      const movieByGenre = await MovieEntity.findAll({
        where: {
          genre,
        },
      });
      return movieByGenre;
    } catch (error) {
      return console.error(error);
    }
  }

  async getMovieByDirectorService(director) {
    try {
      const verifyMovieExists = await MovieEntity.findOne({
        where: {
          director,
        },
      });
      if (!verifyMovieExists) {
        return `${ERRORS.NOT_FOUND}`;
      }
      const movieByDirector = await MovieEntity.findAll({
        where: {
          director,
        },
      });
      return movieByDirector;
    } catch (error) {
      return console.error(error);
    }
  }

  async getMovieByActor(actors) {
    try {
      const verifyMovieExists = await MovieEntity.findOne({
        where: {
          actors,
        },
      });
      if (!verifyMovieExists) {
        return `${ERRORS.NOT_FOUND}`;
      }
      const movieByActor = await MovieEntity.findAll({
        where: {
          actors,
        },
      });
      return movieByActor;
    } catch (error) {
      return console.error(error);
    }
  }
}
