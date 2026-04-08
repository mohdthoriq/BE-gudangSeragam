import { type Request, type Response } from "express";
import {
    createProductService,
    getAllProductsService,
    getProductDetailService,
    updateProductService,
    deleteProductService
} from "./product.service";
import { successResponse } from "utils/response";
import { createProductSchema } from "./dto/create.dto";
import { updateProductSchema } from "./dto/update.dto";

export const createProductController = async (req: Request, res: Response): Promise<any> => {
    const payload = createProductSchema.parse(req.body);
    const result = await createProductService(payload);
    successResponse(res, "Product created successfully", result, null, 201);
};

export const getAllProductsController = async (req: Request, res: Response): Promise<any> => {
    const result = await getAllProductsService();
    successResponse(res, "Products fetched successfully", result);
};

export const getProductDetailController = async (req: Request, res: Response): Promise<any> => {
    const id = req.params.id as string;
    const result = await getProductDetailService(id);
    successResponse(res, "Product detail fetched successfully", result);
};

export const updateProductController = async (req: Request, res: Response): Promise<any> => {
    const id = req.params.id as string;
    const payload = updateProductSchema.parse(req.body);
    const result = await updateProductService(id, payload);
    successResponse(res, "Product updated successfully", result);
};

export const deleteProductController = async (req: Request, res: Response): Promise<any> => {
    const id = req.params.id as string;
    const result = await deleteProductService(id);
    successResponse(res, "Product deleted successfully", result);
};
