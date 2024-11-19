import { sequelize as database } from "../database/connection.js";
import { Sequelize, DataTypes } from "sequelize";

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
  director: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  synopsis: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  year_release: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  actors: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
  },
  watch: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export { MovieEntity };
