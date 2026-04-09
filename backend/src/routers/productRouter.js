import { Router } from "express";
import productController from "../controllers/productController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = Router();

router.post("/", authMiddleware, productController.create);
router.get("/", authMiddleware, productController.getAll);
router.get("/:id", authMiddleware, productController.getById);
router.put("/:id", authMiddleware, productController.update);
router.delete("/:id", authMiddleware, productController.delete);

export default router;