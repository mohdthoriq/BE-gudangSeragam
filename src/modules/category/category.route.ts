import { Router } from "express";
import {
    createCategoryController,
    getAllCategoriesController,
    updateCategoryController,
    deleteCategoryController
} from "./category.controller";

const router = Router();

router.post("/", createCategoryController);
router.get("/", getAllCategoriesController);
router.put("/:id", updateCategoryController);
router.delete("/:id", deleteCategoryController);

export default router;
