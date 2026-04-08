import {
    createVariantRepo,
    getAllVariantsRepo,
    getVariantByIdRepo,
    updateVariantRepo,
    deleteVariantRepo
} from "./variant.repo";
import type { CreateVariantDto } from "./dto/create.dto";
import type { UpdateVariantDto } from "./dto/update.dto";

export const createVariantService = async (payload: CreateVariantDto) => {
    return await createVariantRepo(payload);
};

export const getAllVariantsService = async () => {
    return await getAllVariantsRepo();
};

export const getVariantDetailService = async (id: string) => {
    const variant = await getVariantByIdRepo(id);
    if (!variant) {
        throw new Error("Variant not found");
    }
    return variant;
};

export const updateVariantService = async (id: string, payload: UpdateVariantDto) => {
    const variant = await getVariantByIdRepo(id);
    if (!variant) {
        throw new Error("Variant not found");
    }

    return await updateVariantRepo(id, payload);
};

export const deleteVariantService = async (id: string) => {
    const variant = await getVariantByIdRepo(id);
    if (!variant) {
        throw new Error("Variant not found");
    }

    return await deleteVariantRepo(id);
};
