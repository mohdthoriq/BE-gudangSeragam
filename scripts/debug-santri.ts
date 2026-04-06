
import { PrismaClient } from '../src/generated/index.js';

const prisma = new PrismaClient();

async function main() {
    console.log('--- USERS (ADMINS) ---');
    const admins = await prisma.user.findMany({
        where: { role: 'ADMIN' },
        select: { id: true, username: true, email: true, institutionId: true, institution: { select: { name: true } } }
    });
    console.table(admins);

    console.log('\n--- SANTRI (ALL) ---');
    const santri = await prisma.santri.findMany({
        select: { id: true, fullname: true, nis: true, institutionId: true, institution: { select: { name: true } }, waliId: true, wali: { select: { username: true } } }
    });
    console.table(santri);

    if (santri.length === 0) {
        console.log('No Santri found in DB.');
    }

    // Check matching
    console.log('\n--- MATCHING ANALYSIS ---');
    for (const admin of admins) {
        const count = santri.filter(s => s.institutionId === admin.institutionId).length;
        console.log(`Admin ${admin.username} (InstID: ${admin.institutionId}) can see ${count} santri.`);
    }
}

main()
    .catch(e => console.error(e))
    .finally(async () => await prisma.$disconnect());
