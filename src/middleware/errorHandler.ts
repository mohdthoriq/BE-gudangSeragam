import type { NextFunction, Request, Response } from "express";

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  console.error("ERROR:", err.message, err.stack);

  // Status default
  let statusCode = 500;
  let message = "Terjadi kesalahan server";

  // Jika error punya statusCode
  if (err.statusCode && typeof err.statusCode === "number") {
    statusCode = err.statusCode;
  }

  // Jika error punya message
  if (err.message) {
    message = err.message;
  }

  // Contoh: tangani error spesifik tanpa Prisma
  if (message.includes("tidak ditemukan")) {
    statusCode = 404;
  } else if (message.includes("sudah ada")) {
    statusCode = 400;
  }

  res.status(statusCode).json({
    success: false,
    status: statusCode,
    message,
    ...(process.env.NODE_ENV === "development" ? { stack: err.stack } : {}),
  });
};
