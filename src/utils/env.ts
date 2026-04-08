import dotenv from 'dotenv';
dotenv.config();

export const config = {
    HOST: process.env.HOST || 'http://localhost',
    PORT: process.env.PORT || 5000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    JWT_SECRET: process.env.JWT_SECRET || 'secret',
    DATABASE_URL: process.env.DATABASE_URL || '',
}