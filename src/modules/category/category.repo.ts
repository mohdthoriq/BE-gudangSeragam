import { prisma } from "config/db";
import type { CreateCategoryDto } from "./dto/create.dto";
import type { UpdateCategoryDto } from "./dto/update.dto";

export const createCategoryRepo = async (payload: CreateCategoryDto) => {
    return await prisma.category.create({
        data: payload,
    });
};

export const getAllCategoriesRepo = async () => {
    return await prisma.category.findMany();
};

export const getCategoryByIdRepo = async (id: number) => {
    return await prisma.category.findUnique({
        where: { id },
    });
};

export const getCategoryBySlugRepo = async (slug: string) => {
    return await prisma.category.findUnique({
        where: { slug }
    });
};

export const updateCategoryRepo = async (id: number, payload: UpdateCategoryDto) => {
    const data: any = {};
    if (payload.name !== undefined) data.name = payload.name;
    if (payload.slug !== undefined) data.slug = payload.slug;

    return await prisma.category.update({
        where: { id },
        data,
    });
};

export const deleteCategoryRepo = async (id: number) => {
    return await prisma.category.delete({
        where: { id },
    });
};
