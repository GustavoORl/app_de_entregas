import express from "express"
import { getProductsController } from "../controllers/product/getProductController.js";
import { createProductController } from "../controllers/product/createProductController.js";
import { deleteProductController } from "../controllers/product/deleteProductController.js";
import { updateProductController } from "../controllers/product/updateProductController.js";

const router = express.Router();

router.get("/", getProductsController);
router.post("/", createProductController);
router.put("/:id", updateProductController);
router.delete("/:id", deleteProductController);

export default router