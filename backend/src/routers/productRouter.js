import { Router } from "express";
import productController from "../controllers/productController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import roleMiddleware from "../middlewares/roleMiddleware.js";
import { upload } from "../middlewares/upload.js";

const router = Router();

router.post("/", authMiddleware, roleMiddleware("ADMIN"), upload.single("image"), productController.create);
router.put("/:id", authMiddleware, roleMiddleware("ADMIN"), upload.single("image"), productController.update);
router.delete("/:id", authMiddleware, roleMiddleware("ADMIN"), productController.delete);

export default router;