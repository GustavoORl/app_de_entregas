import express from "express";
import { createUserController } from "../controllers/user/createUserController.js";
import { getUsersController } from "../controllers/user/getUsersController.js";
import { updateUserController } from "../controllers/user/updateUserController.js";
import { deleteUserController } from "../controllers/user/deleteUserController.js";

const router = express.Router();

router.post('/', createUserController);
router.get('/', getUsersController);
router.put('/:id', updateUserController);
router.delete('/:id', deleteUserController);

export default router;