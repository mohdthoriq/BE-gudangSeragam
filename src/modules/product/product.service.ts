import {
    createProductRepo,
    getAllProductsRepo,
    getProductByIdRepo,
    updateProductRepo,
    deleteProductRepo
} from "./product.repo";
import type { CreateProductDto } from "./dto/create.dto";
import type { UpdateProductDto } from "./dto/update.dto";

export const createProductService = async (payload: CreateProductDto) => {
    return await createProductRepo(payload);
};

export const getAllProductsService = async () => {
    return await getAllProductsRepo();
};

export const getProductDetailService = async (id: string) => {
    const product = await getProductByIdRepo(id);
    if (!product) {
        throw new Error("Product not found");
    }
    return product;
};

export const updateProductService = async (id: string, payload: UpdateProductDto) => {
    const product = await getProductByIdRepo(id);
    if (!product) {
        throw new Error("Product not found");
    }

    return await updateProductRepo(id, payload);
};

export const deleteProductService = async (id: string) => {
    const product = await getProductByIdRepo(id);
    if (!product) {
        throw new Error("Product not found");
    }

    return await deleteProductRepo(id);
};
