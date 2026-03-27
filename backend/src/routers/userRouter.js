import express from "express";
import { createUserController } from "../controllers/user/createUserController.js";

const router = express.Router();

router.post('/', createUserController);

export default router;