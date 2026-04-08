import { type Request, type Response } from "express";
import {
    createVariantService,
    getAllVariantsService,
    getVariantDetailService,
    updateVariantService,
    deleteVariantService
} from "./variant.service";
import { successResponse } from "utils/response";
import { createVariantSchema } from "./dto/create.dto";
import { updateVariantSchema } from "./dto/update.dto";

export const createVariantController = async (req: Request, res: Response): Promise<any> => {
    const payload = createVariantSchema.parse(req.body);
    const result = await createVariantService(payload);
    successResponse(res, "Variant created successfully", result, null, 201);
};

export const getAllVariantsController = async (req: Request, res: Response): Promise<any> => {
    const result = await getAllVariantsService();
    successResponse(res, "Variants fetched successfully", result);
};

export const getVariantDetailController = async (req: Request, res: Response): Promise<any> => {
    const id = req.params.id as string;
    const result = await getVariantDetailService(id);
    successResponse(res, "Variant detail fetched successfully", result);
};

export const updateVariantController = async (req: Request, res: Response): Promise<any> => {
    const id = req.params.id as string;
    const payload = updateVariantSchema.parse(req.body);
    const result = await updateVariantService(id, payload);
    successResponse(res, "Variant updated successfully", result);
};

export const deleteVariantController = async (req: Request, res: Response): Promise<any> => {
    const id = req.params.id as string;
    const result = await deleteVariantService(id);
    successResponse(res, "Variant deleted successfully", result);
};
