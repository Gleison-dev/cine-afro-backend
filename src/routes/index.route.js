import { Router } from "express";
import { movieRoute } from "./movie.route.js";

const router = Router();

router.use(movieRoute);

export { router };
