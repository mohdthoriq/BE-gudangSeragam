import { Router } from "express";
import {
    createProductController,
    getAllProductsController,
    getProductDetailController,
    updateProductController,
    deleteProductController
} from "./product.controller";

const router = Router();

router.post("/", createProductController);
router.get("/", getAllProductsController);
router.get("/:id", getProductDetailController);
router.put("/:id", updateProductController);
router.delete("/:id", deleteProductController);

export default router;
