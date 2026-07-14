"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auditService = exports.AuditService = void 0;
const database_1 = require("../config/database");
class AuditService {
    async log(input) {
        await database_1.prisma.auditLog.create({
            data: {
                apiKeyId: input.apiKeyId ?? null,
                action: input.action,
                resource: input.resource ?? null,
                resourceId: input.resourceId ?? null,
                metaJson: input.meta ? JSON.stringify(input.meta) : null,
                ip: input.ip ?? null,
            },
        });
    }
}
exports.AuditService = AuditService;
exports.auditService = new AuditService();
//# sourceMappingURL=audit.service.js.map