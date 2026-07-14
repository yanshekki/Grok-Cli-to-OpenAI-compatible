export interface AuditLogEntity {
    id: string;
    apiKeyId: string | null;
    action: string;
    resource: string | null;
    resourceId: string | null;
    metaJson: string | null;
    ip: string | null;
    createdAt: Date;
}
export interface AuditLogCreateInput {
    apiKeyId?: string | null;
    action: string;
    resource?: string | null;
    resourceId?: string | null;
    meta?: Record<string, unknown> | null;
    ip?: string | null;
}
//# sourceMappingURL=audit-log.entity.d.ts.map