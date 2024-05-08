import express from "express";
import Gym from "../controllers/homeController.js";
const router = express.Router();

router.get('/', Gym.HomeControllers);

export default router;
