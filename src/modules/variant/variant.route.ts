import { Router } from "express";
import {
    createVariantController,
    getAllVariantsController,
    getVariantDetailController,
    updateVariantController,
    deleteVariantController
} from "./variant.controller";

const router = Router();

router.post("/", createVariantController);
router.get("/", getAllVariantsController);
router.get("/:id", getVariantDetailController);
router.put("/:id", updateVariantController);
router.delete("/:id", deleteVariantController);

export default router;
