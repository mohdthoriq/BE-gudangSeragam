import { prisma } from "config/db";
import type { LoginDto } from "./dto/login.dto";
import type { RegisterDto } from "./dto/register.dto";

export const loginRepo = async (payload: LoginDto) => {
    return await prisma.user.findUnique({
        where: {
            email: payload.email,
        },
    });
};

export const registerRepo = async (payload: RegisterDto) => {
    return await prisma.user.create({
        data: {
            name: payload.name,
            email: payload.email,
            passwordHash: payload.password,
        },
    });
};

export const getStoreByEmailRepo = async (email: string) => {
    return await prisma.user.findUnique({
        where: { email }
    });
};