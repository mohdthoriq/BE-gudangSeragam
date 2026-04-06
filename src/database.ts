// src/database.ts
import { Pool } from "pg";
import config from "./utils/env";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "./generated/index.js";
import type { Users, Institution, Category, EmailVerification, user_role, category_type, Notification, Profile, Santri, Transaction, Prisma, InstitutionProfile, PaymentStatus, Invoice, SubscriptionPlan, Payment, UserSubscription, InvoiceStatus, PlanInterval, SubscriptionStatus } from "./generated/index.js";

let prisma: PrismaClient;

const getPrisma = () => {
    if (!prisma) {
        const pool = new Pool({ connectionString: config.DATABASE_URL });
        const adapter = new PrismaPg(pool);
        prisma = new PrismaClient({ adapter });
    }
    return prisma;
}

export const PrismaInstance = getPrisma();

export type { PrismaClient, Users, Institution, Category, EmailVerification, user_role, category_type, Notification, Profile, Santri, Transaction, Prisma, InstitutionProfile, PaymentStatus, Invoice, SubscriptionPlan, Payment, UserSubscription, InvoiceStatus, PlanInterval, SubscriptionStatus }

export default PrismaInstance;

