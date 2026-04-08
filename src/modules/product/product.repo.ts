import { prisma } from "config/db";
import type { CreateProductDto } from "./dto/create.dto";
import type { UpdateProductDto } from "./dto/update.dto";

export const createProductRepo = async (payload: CreateProductDto) => {
    const data: any = { name: payload.name };
    if (payload.categoryId !== undefined) data.categoryId = payload.categoryId;
    if (payload.description !== undefined) data.description = payload.description;
    if (payload.isActive !== undefined) data.isActive = payload.isActive;

    return await prisma.product.create({
        data,
    });
};

export const getAllProductsRepo = async () => {
    return await prisma.product.findMany({
        include: {
            category: true,
            variants: true
        }
    });
};

export const getProductByIdRepo = async (id: string) => {
    return await prisma.product.findUnique({
        where: { id },
        include: {
            category: true,
            variants: true
        }
    });
};

export const updateProductRepo = async (id: string, payload: UpdateProductDto) => {
    // Strip undefined values 
    const data: any = {};
    if (payload.name !== undefined) data.name = payload.name;
    if (payload.categoryId !== undefined) data.categoryId = payload.categoryId;
    if (payload.description !== undefined) data.description = payload.description;
    if (payload.isActive !== undefined) data.isActive = payload.isActive;

    return await prisma.product.update({
        where: { id },
        data,
    });
};

export const deleteProductRepo = async (id: string) => {
    return await prisma.product.delete({
        where: { id },
    });
};
