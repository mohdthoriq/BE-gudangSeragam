import {
    createCategoryRepo,
    getAllCategoriesRepo,
    updateCategoryRepo,
    deleteCategoryRepo,
    getCategoryByIdRepo,
    getCategoryBySlugRepo
} from "./category.repo";
import type { CreateCategoryDto } from "./dto/create.dto";
import type { UpdateCategoryDto } from "./dto/update.dto";

export const createCategoryService = async (payload: CreateCategoryDto) => {
    const existing = await getCategoryBySlugRepo(payload.slug);
    if (existing) {
        throw new Error("Category with this slug already exists");
    }
    return await createCategoryRepo(payload);
};

export const getAllCategoriesService = async () => {
    return await getAllCategoriesRepo();
};

export const updateCategoryService = async (id: number, payload: UpdateCategoryDto) => {
    const category = await getCategoryByIdRepo(id);
    if (!category) {
        throw new Error("Category not found");
    }

    if (payload.slug && payload.slug !== category.slug) {
        const existing = await getCategoryBySlugRepo(payload.slug);
        if (existing) {
            throw new Error("Category with this slug already exists");
        }
    }

    return await updateCategoryRepo(id, payload);
};

export const deleteCategoryService = async (id: number) => {
    const category = await getCategoryByIdRepo(id);
    if (!category) {
        throw new Error("Category not found");
    }

    return await deleteCategoryRepo(id);
};
