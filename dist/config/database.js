"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
exports.disconnectDatabase = disconnectDatabase;
const prisma_1 = require("../../generated/prisma");
const env_1 = require("./env");
const globalForPrisma = globalThis;
exports.prisma = globalForPrisma.prisma ??
    new prisma_1.PrismaClient({
        log: env_1.env.isDev ? ['error', 'warn'] : ['error'],
    });
if (!env_1.env.isProd) {
    globalForPrisma.prisma = exports.prisma;
}
async function disconnectDatabase() {
    await exports.prisma.$disconnect();
}
//# sourceMappingURL=database.js.map