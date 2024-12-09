import { Sequelize, DataTypes } from "sequelize";
import { sequelize as database } from "../database/connection.js";

const MovieEntity = database.define("tb_movies", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  year_release: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  synopsis: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  trailer: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  streaming: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  url_image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export { MovieEntity };
