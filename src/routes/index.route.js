import { Router } from "express";
import { movieRoute } from "./movie.router.js";

const router = Router();

router.use(movieRoute);

export { router };
