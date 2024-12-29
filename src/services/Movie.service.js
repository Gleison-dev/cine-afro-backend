import { MovieEntity } from "../entities/Movie.entity.js";
import { ERRORS, SUCESS } from "../shared/movie.message.js";
import { Op } from "sequelize";

class MovieService {
  // Função para normalizar strings
  normalizeString(str) {
    return str
      .normalize("NFD") // Normaliza a string
      .replace(/[\u0300-\u036f]/g, "") // Remove acentuação
      .replace(/-/g, " "); // Substitui hífens por espaços
  }

  async createMovieService(
    title,
    genre,
    year_release,
    synopsis,
    trailer,
    streaming,
    url_image
  ) {
    try {
      await MovieEntity.sync();
      const verifyMovieExists = await MovieEntity.findOne({
        where: {
          title,
          genre,
        },
      });
      if (verifyMovieExists) {
        return `${ERRORS.ALREADY_EXISTS}`;
      }
      const createMovie = await MovieEntity.create({
        title,
        genre,
        year_release,
        synopsis,
        trailer,
        streaming,
        url_image,
      });
      return `Filme ${SUCESS.CREATED}`;
    } catch (error) {
      return console.error(error);
    }
  }

  async getAllMoviesService() {
    try {
      const movies = await MovieEntity.findAll();
      return movies;
    } catch (error) {
      return console.error(error);
    }
  }

  async getMovieByTitleService(title) {
    try {
      const lowerCaseTitle = title.toLowerCase();
      const normalizedTitle = normalizeString(lowerCaseTitle);

      const movieByTitle = await MovieEntity.findAll({
        where: {
          [Op.or]: [
            { title: { [Op.iLike]: `%${lowerCaseTitle}%` } },
            { title: { [Op.iLike]: `%${normalizedTitle}%` } },
          ],
        },
      });

      if (movieByTitle.length === 0) {
        return `Filme ${ERRORS.NOT_FOUND}`;
      }

      return movieByTitle;
    } catch (error) {
      console.error("Erro ao buscar filme por título:", error);
      return null;
    }
  }

  async getMovieByGenreService(genre) {
    try {
      const verifyMovieByGenre = await MovieEntity.findOne({
        where: {
          genre,
        },
      });
      if (!verifyMovieByGenre) {
        return `Gênero de filme ${ERRORS.NOT_FOUND}`;
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

  async deleteMovieService(id) {
    try {
      const verifyMovieById = await MovieEntity.findByPk(id);
      if (!verifyMovieById) {
        return `ID ${ERRORS.NOT_FOUND}`;
      }
      const deleteMovie = await MovieEntity.destroy({
        where: {
          id,
        },
      });
      return `Filme ${SUCESS.DELETED}`;
    } catch (error) {
      return console.error(error);
    }
  }
}

export { MovieService };
