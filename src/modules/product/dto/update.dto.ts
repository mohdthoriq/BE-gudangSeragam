import { z } from "zod";

export const updateProductSchema = z.object({
    name: z.string().min(1, "Name is required").max(255, "Name must be less than 255 characters").optional(),
    categoryId: z.number().int().positive().optional(),
    description: z.string().optional(),
    isActive: z.boolean().optional(),
});

export type UpdateProductDto = z.infer<typeof updateProductSchema>;
