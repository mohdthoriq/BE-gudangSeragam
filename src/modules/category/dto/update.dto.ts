import { z } from "zod";

export const updateCategorySchema = z.object({
    name: z.string().min(1, "Name is required").max(100, "Name must be less than 100 characters").optional(),
    slug: z.string().min(1, "Slug is required").max(100, "Slug must be less than 100 characters").optional(),
});

export type UpdateCategoryDto = z.infer<typeof updateCategorySchema>;
