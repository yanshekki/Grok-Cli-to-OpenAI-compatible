export type DocumentStorageType = 'db' | 'filesystem';

export interface DocumentEntity {
  id: string;
  apiKeyId: string;
  originalName: string;
  mimeType: string;
  sizeBytes: number;
  storageType: DocumentStorageType;
  storagePath: string | null;
  checksumSha256: string;
  createdAt: Date;
  deletedAt: Date | null;
}

export interface DocumentPublicEntity {
  id: string;
  originalName: string;
  mimeType: string;
  sizeBytes: number;
  checksumSha256: string;
  createdAt: Date;
}
