import { prisma } from "config/db";
import type { CreateVariantDto } from "./dto/create.dto";
import type { UpdateVariantDto } from "./dto/update.dto";

export const createVariantRepo = async (payload: CreateVariantDto) => {
    const data: any = {
        productId: payload.productId,
        material: payload.material,
        color: payload.color,
        price: payload.price,
    };
    if (payload.imageUrl !== undefined) data.imageUrl = payload.imageUrl;
    if (payload.stockStatus !== undefined) data.stockStatus = payload.stockStatus;

    return await prisma.productVariant.create({
        data,
    });
};

export const getAllVariantsRepo = async () => {
    return await prisma.productVariant.findMany({
        include: {
            product: true
        }
    });
};

export const getVariantByIdRepo = async (id: string) => {
    return await prisma.productVariant.findUnique({
        where: { id },
        include: {
            product: true
        }
    });
};

export const updateVariantRepo = async (id: string, payload: UpdateVariantDto) => {
    const data: any = {};
    if (payload.productId !== undefined) data.productId = payload.productId;
    if (payload.material !== undefined) data.material = payload.material;
    if (payload.color !== undefined) data.color = payload.color;
    if (payload.price !== undefined) data.price = payload.price;
    if (payload.imageUrl !== undefined) data.imageUrl = payload.imageUrl;
    if (payload.stockStatus !== undefined) data.stockStatus = payload.stockStatus;

    return await prisma.productVariant.update({
        where: { id },
        data,
    });
};

export const deleteVariantRepo = async (id: string) => {
    return await prisma.productVariant.delete({
        where: { id },
    });
};
