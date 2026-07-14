-- CreateTable
CREATE TABLE `api_keys` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(128) NOT NULL,
    `keyPrefix` VARCHAR(32) NOT NULL,
    `keyHash` VARCHAR(128) NOT NULL,
    `role` VARCHAR(32) NOT NULL DEFAULT 'client',
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `rateLimit` INTEGER NOT NULL DEFAULT 60,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `lastUsedAt` DATETIME(3) NULL,

    UNIQUE INDEX `api_keys_keyHash_key`(`keyHash`),
    INDEX `api_keys_keyPrefix_idx`(`keyPrefix`),
    INDEX `api_keys_isActive_idx`(`isActive`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `chat_requests` (
    `id` VARCHAR(191) NOT NULL,
    `requestId` VARCHAR(64) NOT NULL,
    `apiKeyId` VARCHAR(191) NOT NULL,
    `model` VARCHAR(128) NOT NULL,
    `stream` BOOLEAN NOT NULL DEFAULT false,
    `status` VARCHAR(32) NOT NULL,
    `durationMs` INTEGER NULL,
    `grokSessionId` VARCHAR(128) NULL,
    `promptCiphertext` LONGBLOB NOT NULL,
    `promptIv` LONGBLOB NOT NULL,
    `promptTag` LONGBLOB NOT NULL,
    `responseCiphertext` LONGBLOB NULL,
    `responseIv` LONGBLOB NULL,
    `responseTag` LONGBLOB NULL,
    `errorMessage` TEXT NULL,
    `ip` VARCHAR(64) NULL,
    `userAgent` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `chat_requests_requestId_key`(`requestId`),
    INDEX `chat_requests_apiKeyId_createdAt_idx`(`apiKeyId`, `createdAt`),
    INDEX `chat_requests_status_idx`(`status`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `documents` (
    `id` VARCHAR(191) NOT NULL,
    `apiKeyId` VARCHAR(191) NOT NULL,
    `originalName` VARCHAR(512) NOT NULL,
    `mimeType` VARCHAR(128) NOT NULL,
    `sizeBytes` INTEGER NOT NULL,
    `storageType` VARCHAR(32) NOT NULL,
    `contentCiphertext` LONGBLOB NULL,
    `contentIv` LONGBLOB NULL,
    `contentTag` LONGBLOB NULL,
    `storagePath` VARCHAR(1024) NULL,
    `checksumSha256` VARCHAR(64) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `deletedAt` DATETIME(3) NULL,

    INDEX `documents_apiKeyId_createdAt_idx`(`apiKeyId`, `createdAt`),
    INDEX `documents_deletedAt_idx`(`deletedAt`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `chat_request_documents` (
    `chatRequestId` VARCHAR(191) NOT NULL,
    `documentId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`chatRequestId`, `documentId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `audit_logs` (
    `id` VARCHAR(191) NOT NULL,
    `apiKeyId` VARCHAR(191) NULL,
    `action` VARCHAR(64) NOT NULL,
    `resource` VARCHAR(64) NULL,
    `resourceId` VARCHAR(64) NULL,
    `metaJson` TEXT NULL,
    `ip` VARCHAR(64) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `audit_logs_apiKeyId_createdAt_idx`(`apiKeyId`, `createdAt`),
    INDEX `audit_logs_action_createdAt_idx`(`action`, `createdAt`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `chat_requests` ADD CONSTRAINT `chat_requests_apiKeyId_fkey` FOREIGN KEY (`apiKeyId`) REFERENCES `api_keys`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `documents` ADD CONSTRAINT `documents_apiKeyId_fkey` FOREIGN KEY (`apiKeyId`) REFERENCES `api_keys`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `chat_request_documents` ADD CONSTRAINT `chat_request_documents_chatRequestId_fkey` FOREIGN KEY (`chatRequestId`) REFERENCES `chat_requests`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `chat_request_documents` ADD CONSTRAINT `chat_request_documents_documentId_fkey` FOREIGN KEY (`documentId`) REFERENCES `documents`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `audit_logs` ADD CONSTRAINT `audit_logs_apiKeyId_fkey` FOREIGN KEY (`apiKeyId`) REFERENCES `api_keys`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
