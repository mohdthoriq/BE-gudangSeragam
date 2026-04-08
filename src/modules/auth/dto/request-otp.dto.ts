import { z } from "zod";

export const requestOtpSchema = z.object({
  email: z.string().email("Format email tidak valid"),
});

export type RequestOtpDto = z.infer<typeof requestOtpSchema>;
