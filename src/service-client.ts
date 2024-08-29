import { BlobClient, BlobServiceClient, StorageSharedKeyCredential } from '@azure/storage-blob';

export interface ServiceClientCredentials {
  credentials: StorageSharedKeyCredential;
  accountName: string;
}

const DEFAULT_OPTIONS: ServiceClientCredentials = {
  credentials: new StorageSharedKeyCredential(
    process.env.AZURE_BLOB_STORAGE_ACCOUNT_NAME as string,
    process.env.AZURE_BLOB_STORAGE_ACCOUNT_KEY as string
  ),
  accountName: process.env.AZURE_BLOB_STORAGE_ACCOUNT_NAME as string
};

function buildBlobServiceClient(options: ServiceClientCredentials) {
  return new BlobServiceClient(
    `https://${options.accountName}.blob.core.windows.net`,
    options.credentials
  );
}

function buildBlobClient(blobUrl: string, options: ServiceClientCredentials) {
  return new BlobClient(
    blobUrl,
    options.credentials
  );
}

export function createBlobClient(blobUrl: string, options?: ServiceClientCredentials): BlobClient {
  const blobClient = buildBlobClient(blobUrl, options ? options : DEFAULT_OPTIONS);
  return blobClient;
}

export function serviceClient(options?: ServiceClientCredentials): BlobServiceClient {
  const serviceClient = buildBlobServiceClient(options ? options : DEFAULT_OPTIONS);
  return serviceClient;
}