import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
  process.env.PGDATABASE,
  process.env.PGUSER,
  process.env.PGPASSWORD,
  {
    host: process.env.PGHOST,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
      },
    },
  }
);

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    return console.log("Conexão estabilizada com o banco de dados.");
  } catch (error) {
    return console.error("Falha ao estabilizar com o banco de dados :(", error);
  }
};

export { sequelize, testConnection };
