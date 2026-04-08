import { type Request, type Response } from "express";
import { loginService, registerService, requestOtpService } from "./auth.service";
import { successResponse } from "utils/response";
import { loginSchema } from "./dto/login.dto";
import { registerSchema } from "./dto/register.dto";
import { requestOtpSchema } from "./dto/request-otp.dto";

export const loginController = async (req: Request, res: Response): Promise<any> => {
    const payload = loginSchema.parse(req.body);
    const result = await loginService(payload);
    successResponse(res, "Login successful", result);
};

export const registerController = async (req: Request, res: Response): Promise<any> => {
    const payload = registerSchema.parse(req.body);
    const result = await registerService(payload);
    successResponse(res, "Register successful", result, null, 201);
};

export const requestOtpController = async (req: Request, res: Response): Promise<any> => {
    const payload = requestOtpSchema.parse(req.body);
    const result = await requestOtpService(payload);
    successResponse(res, "OTP requested successfully", result);
};
