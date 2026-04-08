import { registerRepo, getStoreByEmailRepo } from "./auth.repo";
import type { LoginDto } from "./dto/login.dto";
import type { RegisterDto } from "./dto/register.dto";
import type { RequestOtpDto } from "./dto/request-otp.dto";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { config } from "utils/env";

export const loginService = async (payload: LoginDto) => {
    const user = await getStoreByEmailRepo(payload.email);
    if (!user) {
        throw new Error("Invalid email or password");
    }

    const isMatch = await bcrypt.compare(payload.password, user.passwordHash);
    if (!isMatch) {
        throw new Error("Invalid email or password");
    }

    const token = jwt.sign({ id: user.id }, config.JWT_SECRET || 'secret', {
        expiresIn: "1d",
    });

    const { passwordHash, ...userWithoutPassword } = user;

    return { token, user: userWithoutPassword };
};

export const registerService = async (payload: RegisterDto) => {
    const existingUser = await getStoreByEmailRepo(payload.email);
    if (existingUser) {
        throw new Error("Email already in use");
    }

    const passwordHash = await bcrypt.hash(payload.password, 10);
    
    const user = await registerRepo({
        ...payload,
        password: passwordHash, 
    });

    const { passwordHash: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
};

export const requestOtpService = async (payload: RequestOtpDto) => {
    const user = await getStoreByEmailRepo(payload.email);
    if (!user) {
        throw new Error("User not found");
    }

    // OTP mock logic
    const otp = "123456"; 
    
    // In real app, send OTP via email here
    return { message: "OTP sent successfully", email: user.email };
};
