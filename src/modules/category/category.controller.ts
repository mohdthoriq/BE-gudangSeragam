import { type Request, type Response } from "express";
import {
    createCategoryService,
    getAllCategoriesService,
    updateCategoryService,
    deleteCategoryService
} from "./category.service";
import { successResponse } from "utils/response";
import { createCategorySchema } from "./dto/create.dto";
import { updateCategorySchema } from "./dto/update.dto";

export const createCategoryController = async (req: Request, res: Response): Promise<any> => {
    const payload = createCategorySchema.parse(req.body);
    const result = await createCategoryService(payload);
    successResponse(res, "Category created successfully", result, null, 201);
};

export const getAllCategoriesController = async (req: Request, res: Response): Promise<any> => {
    const result = await getAllCategoriesService();
    successResponse(res, "Categories fetched successfully", result);
};

export const updateCategoryController = async (req: Request, res: Response): Promise<any> => {
    const id = parseInt(req.params.id as string);
    if (isNaN(id)) {
        throw new Error("Invalid category ID");
    }
    const payload = updateCategorySchema.parse(req.body);
    const result = await updateCategoryService(id, payload);
    successResponse(res, "Category updated successfully", result);
};

export const deleteCategoryController = async (req: Request, res: Response): Promise<any> => {
    const id = parseInt(req.params.id as string);
    if (isNaN(id)) {
        throw new Error("Invalid category ID");
    }
    const result = await deleteCategoryService(id);
    successResponse(res, "Category deleted successfully", result);
};
