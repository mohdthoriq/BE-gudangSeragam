import { z } from "zod";

export const createVariantSchema = z.object({
    productId: z.string().uuid("Invalid Product ID"),
    material: z.string().min(1, "Material is required").max(100, "Material must be less than 100 characters"),
    color: z.string().min(1, "Color is required").max(50, "Color must be less than 50 characters"),
    price: z.number().positive("Price must be a positive number"),
    imageUrl: z.string().url("Must be a valid URL").optional(),
    stockStatus: z.string().max(50).optional(),
});

export type CreateVariantDto = z.infer<typeof createVariantSchema>;
