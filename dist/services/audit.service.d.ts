import type { AuditLogCreateInput } from '../entities/audit-log.entity';
export declare class AuditService {
    log(input: AuditLogCreateInput): Promise<void>;
}
export declare const auditService: AuditService;
//# sourceMappingURL=audit.service.d.ts.map