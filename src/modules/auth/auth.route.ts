import { Router } from "express";
import { loginController, registerController, requestOtpController } from "./auth.controller";

const router = Router();

router.post("/login", loginController);
router.post("/register", registerController);
router.post("/request-otp", requestOtpController);

export default router;
