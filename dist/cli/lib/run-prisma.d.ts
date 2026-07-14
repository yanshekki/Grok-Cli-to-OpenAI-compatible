/** Keep in sync with package.json prisma / @prisma/client version */
export declare const PRISMA_VERSION = "6.5.0";
/**
 * Resolve the prisma CLI entry (node script), preferring local installs over npx.
 * Order: packageRoot → cwd → require from this CLI package → null (caller may fall back).
 */
export declare function resolvePrismaEntry(packageRoot: string, cwd?: string): string | null;
export declare function runPrisma(args: string[], options: {
    cwd: string;
    packageRoot: string;
    env?: NodeJS.ProcessEnv;
}): void;
//# sourceMappingURL=run-prisma.d.ts.map