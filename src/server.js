import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { testConnection } from "./database/connection.js";

dotenv.config();

const app = express();
const port = process.env.port;

app.use(express.json());
app.use(cors());

app.listen(port, () => {
  testConnection();
  console.log("Servidor rodando!");
});
